const express = require("express");
const router = express.Router();

const controllers = {
  users: require("../controllers/users.controller.js"),
  employees: require("../controllers/employee.controller.js"),
  ppay802s: require("../controllers/ppay802s.controller.js"),
  ppai719as: require("../controllers/ppai719as.controller.js"),
  peis480ds: require("../controllers/peis480ds.controller.js"),
  certificates: require("../controllers/certificates.controller.js"),
  salaries: require("../controllers/salaries.controller.js"),
  ppay3403s: require("../controllers/ppay3403s.controller.js"),
  peis480hs: require("../controllers/peis480hs.controller.js"),
  ppai712s: require("../controllers/ppai712s.controller.js"),
  ppai713s: require("../controllers/ppai713s.controller.js"),
  ppai715s: require("../controllers/ppai715s.controller.js"),
  ppay121s: require("../controllers/ppay121s.controller.js"),
  ppay122s: require("../controllers/ppay122s.controller.js"),
  ppay125s: require("../controllers/ppay125s.controller.js"),
  ppay124s: require("../controllers/ppay124s.controller.js"),
  ppay127s: require("../controllers/ppay127s.controller.js"),
  pfrs860s: require("../controllers/pfrs860s.controller.js"),
  pfrs860sdetails: require("../controllers/pfrs860sdetails.controller.js"),
  purchaseOrders: require("../controllers/purchaseOrders.controller.js"),
  ppur301s: require("../controllers/ppur301s.controller.js"),
  lacp441s: require("../controllers/lacp441s.controller.js"),
  pofromvendor: require("../controllers/pofromvendor.controller.js"),
  checkSearch: require("../controllers/lacp441s.controller.js"),
  ppur410lxs: require("../controllers/ppur410lxs.controller.js"),
  s3VendorMaster: require("../controllers/S3_VendorMaster.controller.js"),
  s3PurchaseOrders: require("../controllers/S3_PurchaseOrders.controller.js"),
  s3VendorCheckRegister: require("../controllers/S3_VendorCheckRegister.controller.js"),
  s3POShipToLocation: require("../controllers/S3_PO_ShipToLocation.controller.js"),
  ProfileReport: require("../controllers/ProfileReport.controller.js"),
  W2data: require("../controllers/W2data.controller.js"),
  CheckRegister: require("../controllers/CheckRegister.controller.js"),
  EmpPayoutputHistory: require("../controllers/EmpPayoutputHistory.controller.js"),
  LogReport: require("../controllers/LogReport.controller.js"),
  };

// 🚀 Log missing controllers for debugging
Object.entries(controllers).forEach(([name, controller]) => {
  if (!controller || Object.keys(controller).length === 0) {
    console.warn(`⚠️ Controller "${name}" is missing or empty.`);
  }
});

// ✅ Function to safely add routes only if controller functions exist
const safeRoute = (method, path, controllerFunction, routeName) => {
  if (controllerFunction) {
    router[method](path, controllerFunction);
    console.log(`✅ Route registered: ${method.toUpperCase()} ${path} -> ${routeName}`);
  } else {
    console.warn(`⚠️ Skipping route ${method.toUpperCase()} ${path} - Controller function is missing`);
  }
};

// ✅ User Authentication Routes
safeRoute("get", "/auth", controllers.users.authenticate, "users.authenticate");
// safeRoute("post", "/auth", controllers.users.authenticate, "users.authenticate");

// ✅ User Management Routes
safeRoute("get", "/users", controllers.users.findAll, "users.findAll");
safeRoute("post", "/users", controllers.users.create, "users.create");
safeRoute("put", "/users/:id", controllers.users.update, "users.update");
safeRoute("delete", "/users/:id", controllers.users.delete, "users.delete");
safeRoute("put",'/status/:id', controllers.users.updateStatus ,"users.updateStatus");
safeRoute("post",'/login', controllers.users.login ,"users.login");


// ✅ Payroll & Attendance Routes
safeRoute("get", "/attendance/:id", controllers.ppay802s.findAll, "ppay802s.findAll");
safeRoute("get", "/attendancedetail/:id", controllers.ppai719as.findAll, "ppai719as.findAll");
safeRoute("get", "/pfrs860s/:id", controllers.pfrs860s.findAll, "pfrs860s.findAll");
safeRoute("get", "/pfrs860sdetails/data", controllers.pfrs860sdetails.findAll, "pfrs860sdetails.findAll");

// ✅ Miscellaneous Data Routes
safeRoute("get", "/miscdata/:id", controllers.peis480ds.findAll, "peis480ds.findAll");
safeRoute("get", "/certificates/:id", controllers.certificates.findAll, "certificates.findAll");
safeRoute("get", "/salaries/:id", controllers.salaries.findAll, "salaries.findAll");
safeRoute("get", "/voldeductions/:id", controllers.ppay3403s.findAll, "ppay3403s.findAll");
safeRoute("get", "/tags/:id", controllers.peis480hs.findAll, "peis480hs.findAll");

// ✅ Payroll Check Routes (Updated)
safeRoute("get", "/payroll/:id", controllers.ppai712s.findAll, "ppai712s.findAll");
// safeRoute("get", "/payrollCheck/", controllers.ppai713s.findAll, "ppai713s.findAll");
safeRoute("get", "/payrollCheck", controllers.ppai713s.findAll, "ppai713s.findAll");
safeRoute("get", "/payrollCheckDeductions", controllers.ppai715s.findAll, "ppai715s.findAll");

// ✅ Pay Codes & Job Codes Routes
safeRoute("get", "/ppay121s", controllers.ppay121s.findAll, "ppay121s.findAll");
safeRoute("get", "/ppay122s", controllers.ppay122s.findAll, "ppay122s.findAll");
safeRoute("get", "/ppay125s", controllers.ppay125s.findAll, "ppay125s.findAll");
safeRoute("get", "/ppay124s", controllers.ppay124s.findAll, "ppay124s.findAll");
safeRoute("get", "/ppay127s", controllers.ppay127s.findAll, "ppay127s.findAll");

// ✅ Purchase Orders Routes
safeRoute("get", "/purchaseOrders/", controllers.purchaseOrders.findAll, "purchaseOrders.findAll");
safeRoute("get", "/pofromvendor/", controllers.pofromvendor.findAll, "pofromvendor.findAll");
safeRoute("get", "/ppur410lxs/", controllers.ppur410lxs.findAll, "ppur410lxs.findAll");

// ✅ Vendor Routes
safeRoute("get", "/lacp441s/", controllers.lacp441s.findAll, "lacp441s.findAll");
safeRoute("get", "/checksearch/", controllers.lacp441s.checkSearch, "lacp441s.checkSearch");
safeRoute("get", "/ppur301s/", controllers.ppur301s.findAll, "ppur301s.findAll");
safeRoute("get", "/ppur301s/:id", controllers.ppur301s.findOne, "ppur301s.findOne");

// ✅ S3 Vendor Master Routes
safeRoute("get", "/s3-vendor/:vendorNumber", controllers.s3VendorMaster.findByVendorNumber, "s3VendorMaster.findByVendorNumber");
safeRoute("get", "/s3-vendors", controllers.s3VendorMaster.findByIndexName, "s3VendorMaster.findByIndexName");

// ✅ S3 Purchase Orders Routes
safeRoute("get", "/s3-purchase-orders/:vendorNumber", controllers.s3PurchaseOrders.findByVendorNumber, "s3PurchaseOrders.findByVendorNumber");

// ✅ S3 Vendor Check Register Routes
safeRoute("get", "/s3-vendor-checks/:vendorNumber", controllers.s3VendorCheckRegister.findByVendorNumber, "s3VendorCheckRegister.findByVendorNumber");

// ✅ S3 PO Ship-To Location Routes
safeRoute("get", "/s3-ship-location/:code", controllers.s3POShipToLocation.findByCode, "s3POShipToLocation.findByCode");

// ✅ Employee Routes
safeRoute("get", "/", controllers.employees.findAll, "employees.findAll");
safeRoute("get", "/:id", controllers.employees.findOne, "employees.findOne");



// ✅ Employee W2 Routes
safeRoute("get", "/w2data/:id", controllers.W2data.findAll, "W2data.findAll");
safeRoute("get", "/w2datayr/details", controllers.W2data.findDetails, "W2data.findDetails");


// ✅ Employee Check Register Routes
safeRoute("get", "/checkregister/:id", controllers.CheckRegister.findAll, "CheckRegister.findAll");
safeRoute("get", "/checkregisterch/details", controllers.CheckRegister.findDetails, "CheckRegister.findDetails");


// ✅ Employee  salaries routes
safeRoute("get", "/salariessystem/:id", controllers.EmpPayoutputHistory.findAll, "EmpPayoutputHistory.findAll");


// ✅ Employee Routes
safeRoute("get", "/empsys/s3data", controllers.ProfileReport.findAll, "ProfileReport.findAll");
safeRoute("get", "/empsys/:id", controllers.ProfileReport.findOne, "ProfileReport.findOne");

safeRoute("get", "/allsystem/logs", controllers.LogReport.findAll, "LogReport.findAll");
// ✅ Attach router to the app
module.exports = (app) => {
  app.use("/api/employees", router);
  console.log("✅ API Routes initialized at: /api/employees");
};
