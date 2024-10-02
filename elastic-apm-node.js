if (typeof process.env.ELA_APM_PLC !== "undefined") {
  const ela_apm_location = process.env.ELA_APM_PLC === "onprem";
  const ela_apm_url = process.env.ELA_APM_URL;
  const ela_apm_pwd = process.env.ELA_APM_PWD;
  const ela_apm_nme = process.env.ELA_APM_NME;

  const apmConfig =
    ela_apm_location === true
      ? {
          serverUrl: ela_apm_url,
          serviceName: ela_apm_nme,
          logLevel: "off",
        }
      : {
          serverUrl: ela_apm_url,
          secretToken: ela_apm_pwd,
          serviceName: ela_apm_nme,
          logLevel: "off",
        };

  // eslint-disable-next-line no-console
  console.log("[ELASTIC APM] Started!");

  module.exports = apmConfig;
}
