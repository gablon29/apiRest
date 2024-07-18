import { adminService } from "../services/adminServices.js";

export const adminCreate = async (username) => {
  const admin = await adminService.createAdmin(username);
  return admin;
};

export const getAdmins = async () => {
  const admins = await adminService.getAdmins();
  return admins;
};
