var amrExport = {};

/**
 * This enum represents Amr's supported ad sizes.  Use one of these
 * constants as the adSize when calling createBannerView.
 * @const
 */
amrExport.AD_SIZE = {
  BANNER: 50,
  LEADERBOARD: 90,
  MEDIUM_RECTANGLE: 250,
};

function checkConfig(config) {
  if (typeof config === "undefined" || config == null) {
    return {};
  }

  return config;
}

amrExport.AMRSdkConfig = function (config, successCallback, failureCallback) {
  if (
    typeof config === "object" &&
    typeof config.amrAppId === "string" &&
    config.amrAppId.length > 0
  ) {
    cordova.exec(successCallback, failureCallback, "Amr", "AMRSdkConfig", [
      config
    ]);

    return;
  }

  if (typeof failureCallback === "function") {
    failureCallback("config.amrAppId should be specified.");
  }
};

amrExport.startWithConfig = function (config, successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "startWithConfig", [
    config
  ]);
};

amrExport.isPrivacyConsentRequired = function (successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "isPrivacyConsentRequired", []);
};

amrExport.startTestSuite = function (config, successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "startTestSuite", [
    config
  ]);
};

amrExport.loadBanner = function (config, successCallback, failureCallback) {
  config = checkConfig(config);

  cordova.exec(successCallback, failureCallback, "Amr", "loadBanner", [
    config
  ]);
};

amrExport.hideBanner = function (successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "hideBanner", []);
};

amrExport.destroyBanner = function (_config, successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "destroyBanner", []);
};

amrExport.destroyInterstitial = function (_config, successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "destroyInterstitial", []);
};

amrExport.destroyRewardedVideo = function (_config, successCallback, failureCallback) {
  cordova.exec(successCallback, failureCallback, "Amr", "destroyRewardedVideo", []);
};

amrExport.loadInterstitial = function (config, successCallback, failureCallback) {
  config = checkConfig(config);

  cordova.exec(successCallback, failureCallback, "Amr", "loadInterstitial", [
    config,
  ]);
};

amrExport.showInterstitial = function (show, successCallback, failureCallback) {
  if (show === undefined) {
    show = true;
  }

  cordova.exec(successCallback, failureCallback, "Amr", "showInterstitial", [
    show,
  ]);
};

amrExport.loadRewardedVideo = function (config, successCallback, failureCallback) {
  config = checkConfig(config);

  cordova.exec(successCallback, failureCallback, "Amr", "loadRewardedVideo", [
    config,
  ]);
};

amrExport.showRewardedVideo = function (tag, successCallback, failureCallback) {
  if (tag === undefined) {
    tag = '';
  }

  cordova.exec(successCallback, failureCallback, "Amr", "showRewardedVideo", [
    tag
  ]);
};

amrExport.loadAndShowRewardedVideo = function (config, successCallback, failureCallback) {
  config = checkConfig(config);

  cordova.exec(successCallback, failureCallback, "Amr", "loadAndShowRewardedVideo", [
    config
  ]);
};

amrExport.loadAndShowInterstitial = function (config, successCallback, failureCallback) {
  config = checkConfig(config);

  cordova.exec(successCallback, failureCallback, "Amr", "loadAndShowInterstitial", [
    config
  ]);
};

amrExport.getRemoteConfigString = function (config, successCallback, failureCallback) {
  if (typeof config === "object" && typeof config.key === "string" && config.key.length > 0 && typeof config.value === "string") {
    cordova.exec(successCallback,failureCallback,"Amr", "getRemoteConfigString", [
      config
    ]);
  }
}

amrExport.trackIAP = function (config, successCallback, failureCallback) {
  if (typeof config === "object" || config != null) {
    cordova.exec(successCallback, failureCallback,"Amr", "trackIAP", [
      config
    ]);

    return;
  }

  if (typeof failureCallback === "function") {
    failureCallback("config object");
  }
}

module.exports = amrExport;
