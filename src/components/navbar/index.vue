<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img
          v-if="theme === 'light'"
          alt="logo"
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/30a6909a-b243-40f3-8896-5f0edd10887b.png"
        />
        <img
          v-else
          alt="logo"
          src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/9a82fe81-6fbc-4b3f-a559-5f4fd8f5013a.png"
        />
        <a-typography-title
          :style="{ margin: 0, fontSize: '18px' }"
          :heading="5"
        >
          政务一体化协同办公平台
        </a-typography-title>
      </a-space>
    </div>
    <ul class="right-side">
      <li>
        <a-dropdown
          :style="{ width: '180px' }"
          position="bottom"
          trigger="hover"
          :popup-visible="dropDownVisible"
          @select="selectOption"
        >
          <a-input-search
            v-model="inputText"
            :style="{ width: '200px', borderRadius: '20px' }"
            placeholder="业务配置"
            @input="searchInput"
            @search="search"
            @press-enter="search"
          />
          <template #content>
            <a-doption v-for="item in autoComplete" :key="item"
              >{{ item }}
            </a-doption>
          </template>
          <template #empty></template>
        </a-dropdown>
      </li>
      <li>
        <a-tooltip :content="$t('settings.language')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setDropDownVisible"
          >
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
        <a-dropdown trigger="click" @select="changeLocale">
          <div ref="triggerBtn" class="trigger-btn"></div>
          <template #content>
            <a-doption
              v-for="item in locales"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </a-doption>
          </template>
        </a-dropdown>
      </li>
      <li>
        <a-tooltip
          :content="
            theme === 'light'
              ? $t('settings.navbar.theme.toDark')
              : $t('settings.navbar.theme.toLight')
          "
        >
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="toggleTheme"
          >
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button
                class="nav-btn"
                type="outline"
                :shape="'circle'"
                @click="setPopoverVisible"
              >
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
        <a-popover
          trigger="click"
          :arrow-style="{ display: 'none' }"
          :content-style="{ padding: 0, minWidth: '400px' }"
          content-class="message-popover"
        >
          <div ref="refBtn" class="ref-btn"></div>
          <template #content>
            <message-box />
          </template>
        </a-popover>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
            @click="setVisible"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="click">
          <a-avatar :size="32" :style="{ marginRight: '8px' }">
            <img alt="avatar" :src="avatar" />
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space @click="$router.push({ name: 'info' })">
                <icon-user />
                <span>
                  {{ $t('messageBox.userCenter') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="$router.push({ name: 'setting' })">
                <icon-settings />
                <span>
                  {{ $t('messageBox.userSettings') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="handleLogout">
                <icon-export />
                <span>
                  {{ $t('messageBox.logout') }}
                </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';
import MessageBox from '../message-box/index.vue';
import { useStore } from '@/store';
import { MutationTypes } from '@/store/modules/app/mutation-types';
import { LOCALE_OPTIONS } from '@/locale';
import useLocale from '@/hooks/locale';
import useUser from '@/hooks/user';

const store = useStore();
const router = useRouter();
const { logout } = useUser();
const { avatar } = store.state.user;
const { changeLocale } = useLocale();
const locales = [...LOCALE_OPTIONS];
const theme = computed(() => {
  return store.state.app.theme;
});
const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    // overridded default behavior
    store.commit(MutationTypes.TOGGLE_THEME, dark);
  },
});
const toggleTheme = useToggle(isDark);
const setVisible = () => {
  store.commit(MutationTypes.APP_UPDATE_SETTING, { globalSettings: true });
};
const appRoute = router
  .getRoutes()
  .find((el) => el.name === 'root') as RouteRecordNormalized;
const inputText = ref();
const dropDownVisible = ref(false);
const nameList: string[] = [];
const searchList = [
  { us: 'classManage', cn: '类别管理' },
  { us: 'userManage', cn: '用户管理' },
  { us: 'interfaceScheme', cn: '界面管理' },
  { us: 'moduleManager', cn: '模块管理' },
  { us: 'moduleManager', cn: '业务配置' },
  { us: 'businessManager', cn: '业务管理' },
  { us: 'systemManager', cn: '系统功能菜单' },
  { us: 'orgUser', cn: '组织用户' },
  { us: 'roleManage', cn: '角色管理' },
  { us: 'leaderManage', cn: '领导管理' },
  { us: 'workplace', cn: '工作台' },
  { us: 'monitor', cn: '实时监控' },
  { us: 'dataAnalysis', cn: '分析页' },
  { us: 'searchTable', cn: '查询列表' },
  { us: 'card', cn: '卡片列表' },
];
const autoComplete = ref(['']);
const selectOption = (value: string) => {
  inputText.value = value;
  dropDownVisible.value = false;
};
function searchInput() {
  if (inputText.value.length > 0) {
    autoComplete.value = [];
    searchList.forEach((e) => {
      if (e.cn.indexOf(inputText.value) > -1) {
        dropDownVisible.value = true;
        autoComplete.value.push(e.cn);
      }
    });
  } else {
    dropDownVisible.value = false;
    autoComplete.value = [];
  }
}
function find(data: RouteRecordRaw[], id: string) {
  // eslint-disable-next-line no-restricted-syntax
  for (const i of data) {
    if (i.children) {
      find(i.children, id);
    }
    if (i.name === id) {
      nameList.push(i.name);
      break;
    }
  }
}
function search() {
  if (inputText.value) {
    const a = searchList.filter((item) => item.cn === inputText.value);
    if (a.length === 1) {
      find(appRoute.children, a[0].us);
      if (nameList.length > 0) {
        router.push({
          name: a[0].us,
        });
      }
    }
  }
}
const refBtn = ref();
const triggerBtn = ref();
const setPopoverVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  refBtn.value.dispatchEvent(event);
};
const handleLogout = () => {
  logout();
};
const setDropDownVisible = () => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  triggerBtn.value.dispatchEvent(event);
};
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;

  img {
    width: 77px;
  }
}

.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;

  :deep(.locale-select) {
    border-radius: 20px;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  a {
    color: var(--color-text-1);
    text-decoration: none;
  }

  .nav-btn {
    color: rgb(var(--gray-8));
    font-size: 16px;
    border-color: rgb(var(--gray-2));
  }

  .trigger-btn,
  .ref-btn {
    position: absolute;
    bottom: 14px;
  }

  .trigger-btn {
    margin-left: 14px;
  }
}
</style>

<style lang="less">
.message-popover {
  .arco-popover-content {
    margin-top: 0;
  }
}
</style>
