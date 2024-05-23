// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
// import Task from './Component/task'

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {


  return (
    <>
      <h1 className="text-center text-success my-5">Dry Fruits..!!!</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/M7-PiV2mzeGMI65vu3d9/product/CASHEW%20240%20DRY%20ROASTED%20THUMBNAIL.png&width=1600&resourceKey=M7-PiV2mzeGMI65vu3d9" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Cashew</h5>
                <p class="card-text">The cashew is the seed of a tropical fruit tree native to South America, and is commonly eaten as food.</p>
                <a href="#" class="btn btn-primary">Read More...</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fig(Anjir)</h5>
                <p class="card-text">The fig is the edible fruit of Ficus carica, a species of small tree in the flowering plant family Moraceae, native to the Mediterranean region, together with western and southern Asia.</p>
                <a href="#" class="btn btn-primary">Read More...</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYorZvQ_iW6-azLYPepjW77Hzy5LTF_h86g&s" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Badam</h5>
                <p class="card-text">Badam, also known as almonds, are a popular dried fruit that can be eaten as a snack or added to other dishes. They are rich in nutrients such as magnesium, vitamin E, and fiber, and contain calcium and phosphorus</p>
                <a href="#" class="btn btn-primary">Read More...</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="https://resources.commerceup.io/?key=https://prod-admin-images.s3.ap-south-1.amazonaws.com/M7-PiV2mzeGMI65vu3d9/product/PISTA%20THUMBNAIL.png&width=1600&resourceKey=M7-PiV2mzeGMI65vu3d9" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pista</h5>
                <p class="card-text">The pistachio, a member of the cashew family, is a small tree originating in Persia. The tree produces seeds that are widely consumed as food. </p>
                <a href="#" class="btn btn-primary">Read More...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
