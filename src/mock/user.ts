import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
  failResponseWrap,
} from '@/utils/setup-mock';

import { MockParams } from '@/types/mock';
import { isLogin } from '@/utils/auth';

setupMock({
  setup() {
    // Mock.XHR.prototype.withCredentials = true;

    // 用户信息
    Mock.mock(new RegExp('/api/user/info'), () => {
      if (isLogin()) {
        return successResponseWrap({
          name: '管理员',
          avatar:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-efbfcb02-017d-4e68-a2c7-f92e33192dbb/be9559c4-fa98-423d-a85e-6ca738bc2f7c.jpg',
          email: 'SpaceCode@email.com',
          job: 'frontend',
          jobName: '前端艺术家',
          organization: 'Frontend',
          organizationName: '前端',
          location: 'beijing',
          locationName: '北京',
          introduction: '人潇洒，性温存',
          personalWebsite: 'https://www.arco.design',
          phone: '17605902971',
          registrationDate: '2013-05-10 12:10:00',
          accountId: '15012312300',
          certification: 1,
        });
      }
      return failResponseWrap(null, 50008, '未登录');
    });

    // 登录
    Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
      const { username, password } = JSON.parse(params.body);
      if (!username) {
        return failResponseWrap(null, 50000, '用户名不能为空');
      }
      if (!password) {
        return failResponseWrap(null, 50000, '密码不能为空');
      }
      if (username === 'admin' && password === 'admin') {
        return successResponseWrap({
          token: '12345',
        });
      }
      return failResponseWrap(null, 50000, '账号或者密码错误');
    });
    // 登出
    Mock.mock(new RegExp('/api/user/logout'), () => {
      return successResponseWrap(null);
    });
  },
});
