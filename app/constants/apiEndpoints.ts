const isNest = process.env.NEXT_PUBLIC_API_BACKEND === "true";

export const URL = {
  REGISTER_USER: isNest ? "/auth/register" : "/api/auth/register",
  CREATE_COURSE: isNest ? "/courses/" : "/api/courses",
  GET_COURSES: isNest ? "/courses" : "/api/courses",
  UPDATE_COURSE: isNest ? "/courses/" : "/api/courses/",
  UPLOAD: "/upload",
  CHAPTERS: "/chapters",

  // for nestjs
  // REGISTER_USER: "/auth/register",
  LOGIN_USER: "/auth/login",
  // GET_COURSES: "/courses",
  // CREATE_COURSE: "/courses/",
  // UPDATE_COURSE_NEST: "/courses/",
  // UPLOAD: "/upload",
};
