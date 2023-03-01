import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAddress } from "../../../../redux/actions/user.action";

const EditAdressForm = (props) => {
  const { initialData,orderSummary, setOrderSummary } = props;
  console.log(initialData);
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initialData ? initialData.mobileNumber : ""
  );
  const [pinCode, setPinCode] = useState(
    initialData ? initialData.pinCode : ""
  );
  const [locality, setLocality] = useState(
    initialData ? initialData.locality : ""
  );
  const [address, setAddress] = useState(
    initialData ? initialData.address : ""
  );
  const [cityDistrictTown, setCityDistrictTown] = useState(
    initialData ? initialData.cityDistrictTown : ""
  );
  const [state, setState] = useState(initialData ? initialData.state : "");
  const [landmark, setLandmark] = useState(
    initialData ? initialData.landmark : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initialData ? initialData.alternatePhone : ""
  );
  const [addressType, setAddressType] = useState(
    initialData ? initialData.addressType : ""
  );
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [id, setId] = useState(initialData ? initialData._id : "");
  const AddressSubmit = (e) => {
    setOrderSummary(true)
    e.preventDefault();
    const payload = {
      address: {
        name,
        mobileNumber,
        pinCode,
        locality,
        address,
        cityDistrictTown,
        state,
        alternatePhone,
        addressType,
      },
    };
    if (id) {
      payload.address._id = id;
    }
    dispatch(addAddress(payload));
    setSubmitFlag(true);
  };
  useEffect(() => {
    if (submitFlag) {
      let _address = {};
      if (id) {
        _address = {
          _id: id,
          name,
          mobileNumber,
          pinCode,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        };
      } else {
        _address = user.address.slice(user.address.length - 1)[0];
      }
    }
  }, [user.address]);
  return (
    <div className="w-full flex flex-col gap-2 max-w-[450px]">
      <span className="w-full py-2 px-2  text-[14px] text-blue-400 bg-primary uppercase">
        <span className="w-4 h-4 rounded-full text-[14px] text-blue-400">
          3
        </span>{" "}
        Yeni Teslimat Addresi gir
      </span>

      {auth.authenticate ? (
        <form
          action=""
          className="flex flex-col gap-3"
          onSubmit={(e) => AddressSubmit(e)}
        >
          <p>Addressi Güncelle:</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="isim soyisim"
            className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="adress"
            className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
          />
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            placeholder="ülke"
            className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
          />
          <div className="flex gap-2">
            <input
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              type="number"
              placeholder="postalkod"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
            <input
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              type="text"
              placeholder="ilce"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
          </div>
          <div className="flex gap-2">
            <input
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              type="text"
              placeholder="dönüm noktası"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
            <input
              value={cityDistrictTown}
              onChange={(e) => setCityDistrictTown(e.target.value)}
              type="text"
              placeholder="şehir/İlçe/Kasaba"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
          </div>
          <div className="flex gap-2">
            <input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              placeholder="numara"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
            <input
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
              type="tel"
              placeholder="alternatif numara"
              className="w-full px-2 py-3 outline-none hover:border border border-secondary hover:border-dark rounded-[5px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <label className="text-xl text-dark">Ev</label>
            <input
              type="radio"
              value={"home"}
              onChange={(e) => setAddressType("home")}
              name="addressType"
              id=""
              placeholder="addresType"
              className="px-3  w-3 h-3 mx-3 border border-primary bg-primary"
            />
            <label className="text-dark text-xl">iş</label>
            <input
              type="radio"
              value={"work"}
              onChange={(e) => setAddressType("work")}
              name="addressType"
              id=""
              placeholder="addresType"
              className="px-3 mx-3 w-3 h-3 border border-primary bg-primary"
            />
          </div>
          <button
            type="submit"
            className=" px-10 py-2  bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
          >
            Save
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default EditAdressForm;