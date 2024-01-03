import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === 'b7ac9408d917ee8e87c1cc001576498c64af6c11782a848a30276a96c41b74e0') {
    pending.push(import('./chunks/chunk-5e2c592c988bd19930959e0296c29e44fef928ea4e04234b7729018b46b6a52d.js'));
  }
  if (key === '8e0e7f9a2737e0789503b9c5cb444df8a87a03258cfd46889e3d9173b5b6a41f') {
    pending.push(import('./chunks/chunk-65ef5a5768f88b66380a19bde8e183855818c857bb2bc33e9c8e6cb353ba989f.js'));
  }
  if (key === '1a1b225e4c2f246d8d8e2fe3233fe528b1d5abe7c9621ebe3a9db0b63cc58308') {
    pending.push(import('./chunks/chunk-4a239a04c3b6a12770c13a2560b8fe8abac2919bd801104697115a4b1e854571.js'));
  }
  if (key === '352952505a1d3cafc9a813981c62b4b3fa80d9d87937f34e5ca93f14df9338c3') {
    pending.push(import('./chunks/chunk-65ef5a5768f88b66380a19bde8e183855818c857bb2bc33e9c8e6cb353ba989f.js'));
  }
  if (key === '84582807f1b8f72ee76ef09076f75a987e38e8b963a50cf49d7cf6ae1ed4760a') {
    pending.push(import('./chunks/chunk-194c7ebb224119c05fdcb8bc824c923f2bd1650f8133a505b9e313c462924207.js'));
  }
  if (key === '012907cd1053c66533727a5937b375bfe6265555afc9e0e32cae5cf0af51651f') {
    pending.push(import('./chunks/chunk-5ae00298933c48d978f1ca36d29ca65c27a9c5e6669183ad8a9c1c3f29bce004.js'));
  }
  if (key === '2ff58af455453f05cbeba63025223f0f0f4f4c7fc9b9d9a485c8cf7b9ec69f21') {
    pending.push(import('./chunks/chunk-050e673b612ec6de3b6e9f93ce1d6bab1f4c550605d70a03238f369713fda2e9.js'));
  }
  if (key === '0e31c2f40babfba629f5976728f769f1199f84c56790a91f07f4982708e58f4c') {
    pending.push(import('./chunks/chunk-194c7ebb224119c05fdcb8bc824c923f2bd1650f8133a505b9e313c462924207.js'));
  }
  if (key === '7fed2e3589b0bda4b563053a312fd5013414057f52b0aee34fce017c2b8bdc09') {
    pending.push(import('./chunks/chunk-c9e92d4aebc10b3cd11e6de73a2dfa37e6d00ca8f2a06a4e30484b3383a298fa.js'));
  }
  if (key === 'f34c7be3ecf5f19a489cfa5fc8d64382b440819aa2cd11efa9109e79506f88f8') {
    pending.push(import('./chunks/chunk-6ef28db12c3b5ee0b2f2d1c562750cb9f2ca885002670d8f59ce8d984c41709c.js'));
  }
  if (key === '38e2a9c5f92a632083836f0babe01ce8e0c48b2c264c9178ff801a9cde9e3ec4') {
    pending.push(import('./chunks/chunk-65ef5a5768f88b66380a19bde8e183855818c857bb2bc33e9c8e6cb353ba989f.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;