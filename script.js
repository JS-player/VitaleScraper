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
    input.value = "";
    const urlArr = inputVal.split("/");
    const srcUrl = urlArr[0] + "//" + urlArr[2] + "/" + urlArr[3];
    GetData(srcUrl);
  });
};
const GetData = (src) => {
  urlsObj = {
    sticker: src + "/st,large,1521x1521.png",
    PNG_without_border: src + "/bg,transparent-flat,1536x1536,075,f.png",
    Sweatshirt_Men_White:
      src +
      "/ra,sweatshirt,x3102,oatmeal_heather,front-c,451,550,1050,1050-bg,f8f8f8.jpg",
    Sweatshirt_Men_Black:
      src +
      "/ra,sweatshirt,x3102,101010:01c5ca27c6,front-c,451,550,1050,1050-bg,f8f8f8.u3.jpg",
    Hoodie_Men_White:
      src +
      "/ssrco,mhoodie,mens,fafafa:ca443f4786,front,square_product,x900-bg,f8f8f8.1.jpg",
    Hoodie_Men_Black:
      src +
      "/ssrco,mhoodie,mens,101010:01c5ca27c6,front,square_product,x900-bg,f8f8f8.1.jpg",
    Hoodie_Women_White:
      src +
      "/ssrco,mhoodie,womens,fafafa:ca443f4786,front,square_product,x900-bg,f8f8f8.1u1.jpg",
    Hoodie_Women_Black:
      src +
      "/ssrco,mhoodie,womens,101010:01c5ca27c6,front,square_product,x900-bg,f8f8f8.1.jpg",
  };
  resArr = [];
  for (const key in urlsObj) {
    const res = `<div class="result">
    <h3>${key} </h3>
    <img src="${urlsObj[key]}" alt="">
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
