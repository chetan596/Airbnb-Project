// function formatViewDate(dateString) {
//   const date = new Date(dateString);
//   const today = new Date();
//   const d1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//   const d2 = new Date(today.getFullYear(), today.getMonth(), today.getDate());

//   const diffTime = d1 - d2;
//   const diffDays = diffTime / (1000 * 60 * 60 * 24);

//   if (diffDays === 0) return "Today";
//   if (diffDays === 1) return "Tomorrow";
//   if (diffDays === -1) return "Yesterday";

//   const options = { day: "2-digit", month: "short" };
//   return date.toLocaleDateString("en-US", options);
// }

// // in your route/controller:
// data.viewDateFormatted = formatViewDate(data.viewDate);

// res.render("wishList", { data });



const allWisListBox = document.querySelectorAll(".wishlist_boxs");
allWisListBox.forEach((box) => {

  box.addEventListener("mouseenter", () => {
    const deleteBtn = box.querySelector(".DeletewishListContanter");  
    if (deleteBtn) {
      deleteBtn.style.display = "flex";
    }
  });

  
  box.addEventListener("mouseleave", () => {
    const deleteBtn = box.querySelector(".DeletewishListContanter");
    if (deleteBtn) {
      deleteBtn.style.display = "none";
    }     
  });
});

const wishListDeletecontainer = document.querySelector(".DeletewishListContanter");
wishListDeletecontainer.addEventListener("click", (e) => {
    e.preventDefault();
  e.stopPropagation();
    console.log("Delete button clicked");
});

function deleteWishList(key) {
  
    console.log("Deleting wishlist with ID:", key);
    
    document.body.insertAdjacentHTML('beforeend', ` <div class="wishlistDeleteContanran">
        <div class="wishList_DeleteBox">
          <div class="deleteCloceBtnVox">
            <button class="deleteCloceBtn" onclick="closeDeleteBox()"><i class="ri-close-line"></i></button>
          </div>
          <div class="deleteMainContantBox">
            <h5>Delete this wishlist?</h5>
           <div>
             <p><span>"${key}"</span> will be </p>
            <p>permanently deleted.</p>
           </div>
          </div>

          <div class="deleteBtnBox">
            <button class="cancelBtn">Cancel</button>
            <button class="deleteBtn" id="deleteBtnId">Delete</button>
          </div>

        </div>
      </div>`)
    

    deleteBtnId.addEventListener("click", () => {
      fetch('/user/wishlistDelete', {
        method: 'DELETE',  // ✅ must be uppercase
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ wishListName: key })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Wishlist deleted successfully');
            location.reload(); // Refresh page
        } else {
            console.error('Error deleting wishlist:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    })

 document.querySelector(".cancelBtn").addEventListener("click", (e)=>{
  console.log(e.ta)
    e.remove();
 });

}
