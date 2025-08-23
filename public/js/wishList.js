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
