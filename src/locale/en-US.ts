import localeInterfaceScheme from '@/views/globalConfig/interfaceScheme/locale/en-US';

import localeModuleManager from '@/views/business/moduleManager/locale/en-US';
import localeSystemManager from '@/views/business/systemManager/locale/en-US';
import localeBusinessManager from '@/views/business/businessManager/locale/en-US';

import localeClassManage from '@/views/unifiedUser/classManage/locale/en-US';
import localeRoleManage from '@/views/unifiedUser/roleManage/locale/en-US';
import localeLeaderManage from '@/views/unifiedUser/leaderManage/locale/en-US';
import localeUserManage from '@/views/unifiedUser/userManage/locale/en-US';
import localeOrgUser from '@/views/unifiedUser/orgUser/locale/en-US';

import localeSettings from './en-US/settings';
import localeMessageBox from '@/components/message-box/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';
import localeMonitor from '@/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';
import localeCardList from '@/views/list/card/locale/en-US';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US';

import locale403 from '@/views/exception/403/locale/en-US';
import locale404 from '@/views/exception/404/locale/en-US';
import locale500 from '@/views/exception/500/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

export default {
  'menu.globalConfig': 'Global Config',
  'menu.business': 'Business Settings',
  'menu.unifiedUser': 'Unified User',
  'menu.dashboard': 'Dashboard',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
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
