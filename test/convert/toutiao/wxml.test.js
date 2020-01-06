/* eslint-disable no-undef */
const wxml = require('../../../src/converter/src/toutiao/wxml.js');

function testWxml(testName, code1, code2) {
  test(testName || 'testing: ', () => {
    expect(code1).toBe(code2);
  });
}

testWxml(
  'alibaba wxml convert test:',
  wxml(`
  <import src="../././common/foot.wxml" />
  <block wx:for-items="{{list}}" wx:key="{{item.id}}">
    <navigator url="pages/{{page.url}}" class="navigator" wx:if="{{page.url !== '@set-tab-bar'}}">
      <view class="navigator-text">{{page.zh}}</view>
      <view class="navigator-arrow"></view>
    </navigator>
    <view wx:else class="navigator" bindtap=""></view>
  </block>
  <view class="page-body-wrapper">
    <canvas id="canvas" class="canvas" data-set="Abs"></canvas>
  </view>
  <view class="page-body-wrapper">
    <canvas canvas-id="canvas" class="canvas"></canvas>
  </view>
  <view wx:for="{{devices}}" wx:key="index" a:for-index="{{idx}}"
    data-device-id="{{item.deviceId}}"
    data-Name="{{item.name || item.localName}}"
    bindtap="createBLEConnection" class="device_item"
    hover-class="device_item_hover">
  </view>
  <template is="head" data="{{title: 'tabBar'}}"/>
  <button bindtap="hideTabBar">
    {{ a<0 ? 'a' :'b' }}
  </button>
  <button type="defualt" formType="reset" onTouch(start)=""></button>
  <slider activeColor=""></slider>
  <slider block-color=""></slider>
  <progress activeColor="" backgroundColor></progress>
  <form catchsubmit="formSubmit" catchreset="formReset" bind:test></form>`, true),
  `
  <import src="../././common/foot.ttml" />
  <block tt:for="{{list}}" tt:key="{{item.id}}">
    <navigator url="pages/{{page.url}}" class="navigator" tt:if="{{page.url !== '@set-tab-bar'}}">
      <view class="navigator-text">{{page.zh}}</view>
      <view class="navigator-arrow"></view>
    </navigator>
    <view tt:else class="navigator" bindtap=""></view>
  </block>
  <view class="page-body-wrapper">
    <canvas id="canvas" class="canvas" data-set="Abs"></canvas>
  </view>
  <view class="page-body-wrapper">
    <canvas canvas-id="canvas" class="canvas"></canvas>
  </view>
  <view tt:for="{{devices}}" tt:key="index" a:for-index="{{idx}}"
    data-device-id="{{item.deviceId}}"
    data-Name="{{item.name || item.localName}}"
    bindtap="createBLEConnection" class="device_item"
    hover-class="device_item_hover">
  </view>
  <template is="head" data="{{title: 'tabBar'}}"/>
  <button bindtap="hideTabBar">
    {{ a<0 ? 'a' :'b' }}
  </button>
  <button type="defualt" formType="reset" onTouch(start)=""></button>
  <slider active-color=""></slider>
  <slider handle-color=""></slider>
  <progress active-color="" backgroundColor></progress>
  <form catchsubmit="formSubmit" catchreset="formReset" bind:test></form>`
);