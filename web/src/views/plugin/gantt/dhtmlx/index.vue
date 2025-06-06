<script setup lang="tsx">
import { onMounted, shallowRef } from 'vue';
import { gantt } from 'dhtmlx-gantt';
import type { GanttConfigOptions, ZoomLevel } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import { ganttTasks } from './data';

defineOptions({ name: 'GanttPage' });

const ganttRef = shallowRef<HTMLElement>();

type TimeType = 'day' | 'week' | 'month' | 'quarter' | 'year';

const timeType = shallowRef<TimeType>('quarter');

interface TimeData {
  label: string;
  value: TimeType;
}

const data: TimeData[] = [
  { label: '天', value: 'day' },
  { label: '周', value: 'week' },
  { label: '月', value: 'month' },
  { label: '季', value: 'quarter' },
  { label: '年', value: 'year' }
];

function initGantt() {
  if (!ganttRef.value) return;

  const config: Partial<GanttConfigOptions> = {
    grid_width: 350,
    add_column: false,
    autofit: false,
    row_height: 60,
    bar_height: 34,
    auto_types: true,
    xml_date: '%Y-%m-%d',
    columns: [
      { name: 'text', label: '项目名称', tree: true, width: '*' },
      { name: 'start_date', label: '开始时间', align: 'center', width: 150 }
    ]
  };

  Object.assign(gantt.config, config);

  gantt.i18n.setLocale('cn');
  gantt.init(ganttRef.value);
  gantt.parse({ data: ganttTasks });

  const zoomLevels: ZoomLevel[] = [
    {
      name: 'day',
      scale_height: 60,
      scales: [{ unit: 'day', step: 1, format: '%d %M' }]
    },
    {
      name: 'week',
      scale_height: 60,
      scales: [
        {
          unit: 'week',
          step: 1,
          format(date: Date) {
            const dateToStr = gantt.date.date_to_str('%m-%d');
            const endDate = gantt.date.add(date, -6, 'day'); // 第几周
            return `${dateToStr(endDate)} 至 ${dateToStr(date)}`;
          }
        },
        {
          unit: 'day',
          step: 1,
          format: '%d',
          css(date: Date) {
            if (date.getDay() === 0 || date.getDay() === 6) {
              return 'day-item weekend weekend-border-bottom';
            }
            return 'day-item';
          }
        }
      ]
    },
    {
      name: 'month',
      scale_height: 60,
      min_column_width: 18,
      scales: [
        { unit: 'month', format: '%Y-%m' },
        {
          unit: 'day',
          step: 1,
          format: '%d',
          css(date: Date) {
            if (date.getDay() === 0 || date.getDay() === 6) {
              return 'day-item weekend weekend-border-bottom';
            }
            return 'day-item';
          }
        }
      ]
    },
    {
      name: 'quarter',
      height: 60,
      min_column_width: 110,
      scales: [
        {
          unit: 'quarter',
          step: 1,
          format(date: Date) {
            const yearStr = `${new Date(date).getFullYear()}年`;
            const dateToStr = gantt.date.date_to_str('%M');
            const endDate = gantt.date.add(gantt.date.add(date, 3, 'month'), -1, 'day');
            return `${yearStr + dateToStr(date)} - ${dateToStr(endDate)}`;
          }
        },
        {
          unit: 'week',
          step: 1,
          format(date: Date) {
            const dateToStr = gantt.date.date_to_str('%m-%d');
            const endDate = gantt.date.add(date, 6, 'day');
            return `${dateToStr(date)} 至 ${dateToStr(endDate)}`;
          }
        }
      ]
    },
    {
      name: 'year',
      scale_height: 50,
      min_column_width: 150,
      scales: [
        { unit: 'year', step: 1, format: '%Y年' },
        { unit: 'month', format: '%Y-%m' }
      ]
    }
  ];

  gantt.ext.zoom.init({ levels: zoomLevels });
  gantt.ext.zoom.setLevel(timeType.value);
}

function changeTime(value: string | number) {
  timeType.value = value as TimeType;
  gantt.ext.zoom.setLevel(value);
}

onMounted(() => {
  initGantt();
});
</script>

<template>
  <div class="overflow-hidden lt-sm:overflow-auto">
    <ElCard header="甘特图演示" content-class="overflow-y-hidden overflow-x-auto" class="h-full card-wrapper">
      <template #header>
        <div class="flex items-center justify-between">
          <p>甘特图演示</p>
          <ElSegmented v-model="timeType" :options="data" @change="changeTime" />
        </div>
      </template>

      <div ref="ganttRef" class="size-full min-w-800px"></div>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
