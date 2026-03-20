import React from "react";
import "./App.css";
import Component from "./01_components/Component";
import Prop from "./02_props/Prop";
import State from "./03_states/State";
import PropDrilling from "./04_propDrilling/PropDrilling";
import ContextAPI from "./05_contextAPI/ContextAPI";
import UseContextHook from "./06_useContext/UseContextHook";
import UseMemo from "./07_useMemo/UseMemo";
import UseCallback from "./08_useCallback/UseCallback";
import LiftingStateUp from "./09_liftingStateup/LiftingStateUp";
import ListRendering from "./10_listRendering/ListRendering";
import FormInReact from "./11_formInReact/FormInReact";
import UseStateObject from "./12_useStateWithObjecrt/UseStateObject";
import UseStateWithArray from "./13_useStateWithArray/UseStateWithArray";
import UseState from "./14_Hooks/1_useState/UseState";
import UseEffect from "./14_Hooks/2_useEffect/UseEffect";
import UseRef from "./14_Hooks/3_useRef/UseRef";
import UseReducer from "./14_Hooks/4_useReducer/UseReducer";
import Counter from "./14_Hooks/5_customHook/Counter";
import FetchData from "./15_API/fetch&extract-data/FetchData";
import LoginLogout from "./15_API/login&logout/LoginLogout";
import PostData from "./15_API/postData-To-API/PostData";
import Post_SingleImage from "./15_API/post-imageFile/Post_SingleImage";
import Post_MultipleImage from "./15_API/post-imageFile/Post_MultipleImage";
import FormDataUpload from "./15_API/post-imageFile/FormDataUpload";
import Get_Method from "./16_restAPI/fetchData-get/Get_Method";
import Post_Method from "./16_restAPI/sendData-Post/Post_Method";
import Patch_Method from "./16_restAPI/updateSingleData-Patch/Patch_Method";
import Put_Method from "./16_restAPI/updateFullObjectData-Put/Put_Method";
import Delete_SingleData_Method from "./16_restAPI/deleteData-delete/Delete_SingleData_Method";
import Delete_AllData_Method from "./16_restAPI/deleteData-delete/Delete_AllData_Method";

function App() {
  // 02_props component's function :-
  // function add(a, b) {
  //   const result = a + b;
  //   alert(`The Answer is: ${result}`);
  // }

  return (
    <>
      <h1 className="text-4xl">➡️ React Practice?</h1>

      {/* { 01_components } */}
      {/* <div className="flex flex-col justify-center gap-5">
        <Component
          title="1st Component"
          description="This is the first reusable component"
        />
        <Component
          title="2nd Component"
          description="This is the second reusable component"
        />
      </div> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 02_props } */}
      <div>
        {/* 👉 We pass a function reference when no arguments are required, and use an arrow function when we need to pass arguments or add logic. */}

        {/* <Prop
          name="Akash kashyap"
          role="Frontend Developer"
          fun={() => add(5, 3)}
        /> */}

        {/* Imp Note:- fun={() => add(5, 3)} |✅ Callback Function (Function passed as Props) */}
      </div>

      {/* ---------------------------------------------------------------------------- */}

      {/* { 03_states } */}
      <div>{/* <State /> */}</div>

      {/* ---------------------------------------------------------------------------- */}

      {/* { 04_propDrilling } */}
      {/* <div>
        <PropDrilling />
      </div> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 05_ContextAPI } */}
      {/* <div>
         <ContextAPI />
      </div> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 06_useContext } */}
      {/* <div>
        <UseContextHook />
      </div> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 07_useMemo } */}
      {/* <UseMemo /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 08_useCallback } */}
      {/* <UseCallback /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 09_liftingStateup } */}
      {/* <div>
        <LiftingStateUp />
      </div> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 10_listRendering } */}
      {/* <ListRendering /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 11_formInReact } */}
      {/* <FormInReact /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 12_useStateWithObjecrt } */}
      {/* <UseStateObject /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 13_useStateWithArray } */}
      {/* <UseStateWithArray /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* { 14_Hooks } */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}

      {/* Custom Hook:- */}
      {/* <Counter /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* 15_API */}
      {/* <FetchData /> */}
      {/* <LoginLogout /> */}
      {/* <PostData /> */}
      {/* <Post_SingleImage /> */}
      {/* <Post_MultipleImage /> */}
      {/* <FormDataUpload /> */}

      {/* ---------------------------------------------------------------------------- */}

      {/* 16_restAPI */}
      {/* <Get_Method /> */}
      {/* <Post_Method /> */}
      {/* <Patch_Method /> */}
      {/* <Put_Method /> */}
      {/* <Delete_SingleData_Method /> */}
      {/* <Delete_AllData_Method /> */}
    </>
  );
}

export default App;
