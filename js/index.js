const data = [
    {
        name: "Bài NCKH 1",
        author: "Nguyễn Văn A, Nguyễn Thị B",
        describe: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium fugiat provident, obcaecati delectus sed omnis asperiores placeat porro esse debitis eius quisquam, itaque laudantium quo illo beatae iste officia quae repellendus totam architecto dignissimos. Laboriosam repellat recusandae fuga sint sequi voluptatum ea animi rem dolore, ex enim suscipit accusamus sapiente asperiores assumenda adipisci tenetur laudantium quo modi vel voluptatem non, sed corporis officiis. Quisquam cupiditate nobis placeat, facere ratione omnis autem dicta odit odio illo, aperiam dignissimos minus nulla soluta harum laborum voluptatem rerum. Possimus exercitationem dolorum veniam, dolorem minima totam suscipit dolore quas incidunt accusamus velit reiciendis eligendi.",
        award:"Giải A NNCT",
        public_time:{
            year:"2023",
            month:"march",
            day:"28"
        },
        photo: "../assets/photos/Logo UEH trắng.png"
    },
    {
        name: "Bài NCKH 2",
        author: "Nguyễn Văn A, Nguyễn Thị B",
        describe: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium fugiat provident, obcaecati delectus sed omnis asperiores placeat porro esse debitis eius quisquam, itaque laudantium quo illo beatae iste officia quae repellendus totam architecto dignissimos. Laboriosam repellat recusandae fuga sint sequi voluptatum ea animi rem dolore, ex enim suscipit accusamus sapiente asperiores assumenda adipisci tenetur laudantium quo modi vel voluptatem non, sed corporis officiis. Quisquam cupiditate nobis placeat, facere ratione omnis autem dicta odit odio illo, aperiam dignissimos minus nulla soluta harum laborum voluptatem rerum. Possimus exercitationem dolorum veniam, dolorem minima totam suscipit dolore quas incidunt accusamus velit reiciendis eligendi.",
        award:"Giải A NNCT",
        public_time:{
            year:"2023",
            month:"march",
            day:"28"
        },
        photo: "../assets/photos/Logo UEH trắng.png"
    },
    {
        name: "Bài NCKH 3",
        author: "Nguyễn Văn A, Nguyễn Thị B",
        describe: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium fugiat provident, obcaecati delectus sed omnis asperiores placeat porro esse debitis eius quisquam, itaque laudantium quo illo beatae iste officia quae repellendus totam architecto dignissimos. Laboriosam repellat recusandae fuga sint sequi voluptatum ea animi rem dolore, ex enim suscipit accusamus sapiente asperiores assumenda adipisci tenetur laudantium quo modi vel voluptatem non, sed corporis officiis. Quisquam cupiditate nobis placeat, facere ratione omnis autem dicta odit odio illo, aperiam dignissimos minus nulla soluta harum laborum voluptatem rerum. Possimus exercitationem dolorum veniam, dolorem minima totam suscipit dolore quas incidunt accusamus velit reiciendis eligendi.",
        award:"Giải A NNCT",
        public_time:{
            year:"2023",
            month:"march",
            day:"28"
        },
        photo: "../assets/photos/Logo UEH trắng.png"
    },
    {
        name: "Bài NCKH 4",
        author: "Nguyễn Văn A, Nguyễn Thị B",
        describe: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium fugiat provident, obcaecati delectus sed omnis asperiores placeat porro esse debitis eius quisquam, itaque laudantium quo illo beatae iste officia quae repellendus totam architecto dignissimos. Laboriosam repellat recusandae fuga sint sequi voluptatum ea animi rem dolore, ex enim suscipit accusamus sapiente asperiores assumenda adipisci tenetur laudantium quo modi vel voluptatem non, sed corporis officiis. Quisquam cupiditate nobis placeat, facere ratione omnis autem dicta odit odio illo, aperiam dignissimos minus nulla soluta harum laborum voluptatem rerum. Possimus exercitationem dolorum veniam, dolorem minima totam suscipit dolore quas incidunt accusamus velit reiciendis eligendi.",
        award:"Giải A NNCT",
        public_time:{
            year:"2023",
            month:"march",
            day:"28"
        },
        photo: "../assets/photos/Logo UEH trắng.png"
    }
]

const container = document.querySelector(".container");
const navigation = document.querySelector(".navigation");
const content = document.querySelector(".content");
const sliderwrapper = document.querySelector(".slider .slide-wrapper");

container.classList.add('${data[0].title}');
navigation.innerHTML = "";
content.innerHTML ="";
sliderwrapper.innerHTML="";

for(let i=0;i<data.length;i++){
    navigation.innerHTML += 
    <li class="navigation-item">
        <span></span>
        <span>${i+1}</span>
    </li>
    ;
}
