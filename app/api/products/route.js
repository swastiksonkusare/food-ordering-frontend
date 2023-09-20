import { connectToDB } from "@utils/db";

import Product from "@models/products";

export const GET = async (req) => {
  try {
    await connectToDB();

    const products = await Product.find({});

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
export const POST = async (req) => {
  const { title, desc, img, prices, extraOptions } = await req.json();

  try {
    await connectToDB();

    const product = await new Product({
      title,
      desc,
      img,
      prices,
      extraOptions,
    });

    await product.save();

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a product", { status: 500 });
  }
};
