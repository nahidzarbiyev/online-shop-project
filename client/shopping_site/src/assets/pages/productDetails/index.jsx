import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsById } from "../../redux/actions/product.action";
import { BiHeart } from "react-icons/bi";
import { uid } from "uid";
import { Collapse } from "antd";
const { Panel } = Collapse;
import Spinns from "../../components/spins";
import ProductStore from "../productsPage/productStore";
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, [productId]);

  return (
    <>
      <div className="max-w-[1400px] mx-auto py-16 px-16 ">
        {product.loading ? (
          <Spinns />
        ) : (
          <>
            <div className="flex gap-4  justify-between">
              <div className="flex max-w-[900px] flex-wrap gap-x-3 gap-y-3">
                {product?.productDetails?.productPictures?.map((img) => {
                  return (
                    <img
                      src={`http://localhost:8080/public/${img.img}`}
                      alt=""
                      className="max-w-[400px]"
                    />
                  );
                })}
              </div>
              <div className="flex flex-col gap-3 w-full max-w-[400px]">
                <p className="text-3xl font-normal text-dark tracking-wide ">
                  {product?.productDetails?.name}
                </p>
                <p className="text-xl font-normal text-dark  ">
                  {" "}
                  ₺ {product?.productDetails?.price}
                </p>
                {!product?.productDetails?.size?.[0] == "" ? (
                  <div className="w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-[16px] font-normal tracking-wide text-dark ">
                        {" "}
                        Numara/Beden Seç
                      </p>{" "}
                      <p className="text-[16px] font-normal tracking-wide text-secondary ">
                        {" "}
                        Numara/Beden Rehberi
                      </p>{" "}
                    </div>
                    <div className="grid grid-cols-3 gap-2 my-2 w-full">
                      {product?.productDetails?.size?.[0]
                        .split(",")
                        .map((el) => {
                          return (
                            <span className="flex w-full py-2 hover:border-dark transition-all duration-300 cursor-pointer  border justify-center items-center border-secondary">
                              {el}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                ) : (
                  <p className="text-[16px] font-normal tracking-wide text-dark uppercase ">
                    TEK BEDEN/NUMARA
                  </p>
                )}

                <div className="flex flex-col gap-3">
                  <button className="w-full h-30 rounded-[30px] bg-dark hover:opacity-70 text-primary py-4">
                    Sepete Ekle
                  </button>
                  <button className="w-full h-30 rounded-[30px] bg-white border border-primary hover:border-dark text-dark py-4 flex justify-center items-center gap-2">
                    Favori
                    <BiHeart />
                  </button>
                </div>
                <p className="leading-7 my-3 text-dark">
                  {product?.productDetails?.description}
                </p>

                <ul className="leading-7 my-3 px-5 text-dark">
                  <li className="list-disc">
                    Gösterilen Renk:{" "}
                    {product?.productDetails?.color?.[0]
                      .split(",")
                      .map((el) => (
                        <span key={uid()}>/ {el} </span>
                      ))}
                  </li>
                  <li className="list-disc">
                    Stil: <span>DV1178-500</span>
                  </li>
                </ul>
                <div>
                  <Collapse defaultActiveKey={["1"]} bordered={false}>
                    <Panel header="Ücretsiz Kargo ve İade Olanağı" key="4">
                      <p>
                        2.200 TL üzerindeki siparişlerde ücretsiz standart
                        kargo.
                      </p>
                      <ul className="px-5">
                        <li className="list-disc">
                          Siparişini hangi nedenle olursa olsun 30 gün içinde
                          ücretsiz olarak iade edebilirsin.
                        </li>
                      </ul>
                    </Panel>
                    <Panel header="Nasıl Üretildi?" key="2">
                      <ul className="px-5">
                        <li className="list-disc">
                          Nike ürünlerinde kullanılan geri dönüştürülmüş
                          polyester; geri dönüştürülmüş plastik şişelerin
                          temizlenmesi, parçalanması ve peletlere
                          dönüştürülmesiyle elde edilir. Peletlerden üretilen
                          yüksek kaliteli, yeni ve maksimum performans sunan
                          iplikler ürünlerimizde kullanılır ve çevre üzerindeki
                          etki azaltılmış olur.
                        </li>
                        <li className="list-disc">
                          Geri dönüştürülmüş polyester, atık miktarını azaltmaya
                          ek olarak karbon emisyonlarını da yeni polyestere
                          kıyasla %30'a varan oranlarda azaltır. Nike, her yıl
                          ortalama 1 milyar plastik şişeyi çöplerden ve
                          kanallardan toplamaktadır.
                        </li>
                      </ul>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
