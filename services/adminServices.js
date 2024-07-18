import Admin from "../models/Admin.js";

class AdminService {
  async createAdmin(username) {
    return await Admin.create({ username });
  }

  async getAdmins() {
    return await Admin.findAll();
  }
}

export const adminService = new AdminService();
