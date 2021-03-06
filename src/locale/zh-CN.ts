import localeInterfaceScheme from '@/views/globalConfig/interfaceScheme/locale/zh-CN';

import localeModuleManager from '@/views/business/moduleManager/locale/zh-CN';
import localeSystemManager from '@/views/business/systemManager/locale/zh-CN';
import localeBusinessManager from '@/views/business/businessManager/locale/zh-CN';

import localeClassManage from '@/views/unifiedUser/classManage/locale/zh-CN';
import localeRoleManage from '@/views/unifiedUser/roleManage/locale/zh-CN';
import localeLeaderManage from '@/views/unifiedUser/leaderManage/locale/zh-CN';
import localeUserManage from '@/views/unifiedUser/userManage/locale/zh-CN';
import localeOrgUser from '@/views/unifiedUser/orgUser/locale/zh-CN';

import localeSettings from './zh-CN/settings';
import localeMessageBox from '@/components/message-box/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeCardList from '@/views/list/card/locale/zh-CN';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

export default {
  'menu.globalConfig': '全局配置',
  'menu.business': '业务配置',
  'menu.unifiedUser': '统一用户',
  'menu.dashboard': '控制中心',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeInterfaceScheme,
  ...localeModuleManager,
  ...localeSystemManager,
  ...localeBusinessManager,
  ...localeClassManage,
  ...localeRoleManage,
  ...localeLeaderManage,
  ...localeUserManage,
  ...localeOrgUser,
  ...localeSettings,
  ...localeMessageBox,
  ...localeWorkplace,
  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
