import React from "react";

export const Pocket = () => {
  return (
    <>
      <h3 className="p-4">Edit Product</h3>
      <div>
        <div class="mb-3">
          <label htmlFor="floatingInput ml-2">ID</label>
          <input
            type="text"
            class="form-control w-100"
            id="floatingInput"
            placeholder="..........."
          />
        </div>
        <div class="d-flex flex-row  align-items-center">
          <div style={{height:"70px",width:"70px"}} class="border rounded d-flex justify-content-center align-items-center bg-light me-3" >
          <input
            type="file"
            style={{height:"0vh", width:"0vw"}}
            class="form-control w-0 h-0  none d-none"
            id="file"
            placeholder="name@example.com"
          />
          </div>
          <div class="d-flex flex-column ">
            <h6>
                select your product picture
            </h6>
            <button class="btn btn-sm btn-primary mt-1" style={{width:"80px"}}>Browse</button>
          </div>
        </div>
        <div class="my-3">
          <label htmlFor="floatingInput ml-2">Product Name</label>
          <input
            type="text"
            class="form-control w-100"
            id="floatingInput"
            placeholder="Product Name"
          />
        </div><div class="mb-3">
          <label htmlFor="floatingInput ml-2">Contegory</label>
          <input
            type="text"
            class="form-control w-100"
            id="floatingInput"
            placeholder=""
          />
        </div>
        <div class="mb-3">
          <label htmlFor="floatingInput ml-2">Price</label>
          <input
            type="text"
            class="form-control w-100"
            id="floatingInput"
            placeholder="$ 3"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="floatingInput ml-2">Description</label>
          <input
            type="text"
            style={{height: '10rem'}}
            class="form-control w-100"
            id="floatingInput"
            placeholder=""
          />
        </div>

      </div>
      <div>      <button type="button" class="btn btn-primary">save</button>
      <button type="button" class="btn btn-light">Cancel</button>
</div>

    </>
  );
};
