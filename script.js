const init = function () {
  inputListner();
};
const inputListner = function () {
  const input = document.getElementById("srcUrl");
  const form = document.getElementById("srcForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = input.value;
    if (!inputVal || inputVal.length < 1) return;
   input.value = ' ';
    GetData(inputVal);
  });
};
const GetData = (src) => {
  urlsObj = {
    sticker: src + "/st,large,1521x1521.png",
    PNG_without_border: src + "/bg,transparent-flat,1536x1536,075,f.png",
    T_Shirt_Men_White:
      src +
      "/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,1000x1000.jpg",
    T_Shirt_Men_Black:
      src +
      "/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,1000x1000.jpg",
    Sweet_Shirt_Men_White:
      src +
      "/ra,sweatshirt,x3102,oatmeal_heather,front-c,451,550,1050,1050-bg,f8f8f8.jpg",
    Sweet_Shirt_Men_Black:
      src +
      "/ra,sweatshirt,x3102,101010:01c5ca27c6,front-c,451,550,1050,1050-bg,f8f8f8.u3.jpg",
  };
  resArr = [];
  for (const key in urlsObj) {
    const res = `<div class="result">
    <h3>${key}✅ </h3>
    <a target="blank" href="${urlsObj[key]}">Get Image</a>
  </div>`;
    resArr.push(res);
  }
  render(resArr);
};
const render = (data) => {
  const container = document.getElementsByClassName("results")[0];
  container.innerHTML = "";
  markup = data.join("");
  container.insertAdjacentHTML("afterbegin", markup);
};
init();
