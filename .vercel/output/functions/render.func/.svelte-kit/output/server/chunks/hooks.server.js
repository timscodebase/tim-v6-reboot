const handle = async ({ event, resolve }) => {
  let userid = event.cookies.get("userid");
  if (!userid) {
    userid = crypto.randomUUID();
    event.cookies.set("userid", userid, { path: "/" });
  }
  event.locals.userid = userid;
  return resolve(event);
};
export {
  handle
};
