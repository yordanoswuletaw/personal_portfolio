export default defineEventHandler(async (event) => {
  const { email, feedback } = await useBody(event);
  const config = useRuntimeConfig();
  let status = null;

  try {
    await $fetch(config.xRapidEndpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": config.xRapidApiKey,
        "X-RapidAPI-Host": config.xRapidApiHost,
      },
      body: {
        personalizations: [
          { to: [{ email: config.adminEmail }], subject: "Feedback" },
        ],
        from: { email: email },
        content: [{ type: "text/plain", value: feedback }],
      },
    });
    status = 'sent';
  } catch (e) {
    status = 'error';
  }

  return {
    status,
  };
});
