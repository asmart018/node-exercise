import express from "express";
import productRouteRouter from "./products.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

router.use("/products", productRouteRouter);

export default router;
