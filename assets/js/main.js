// EFEITO ROLAGEM NAV BAR

window.onload = function () {
    window.addEventListener("scroll", function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add("scroll");
        } else {
            document.querySelector("header").classList.remove("scroll");
        }
    });

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");

    menu_btn.addEventListener("click", function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    });
};

// SEÇÃO PROJETOS

let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}


// EFEITO VOLTAR AO TOPO

let back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        back_to_top.classList.add("show");
    } else {
        back_to_top.classList.remove("show");
    }
});
back_to_top.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


//PORTIFÓLIO

let filter_btns = document.querySelectorAll('.filter-btn1');
let projects = document.querySelectorAll('.filter-project-item1');

filter_btns.forEach(filter_btn => {
  filter_btn.addEventListener('click', () => {
    filter_btns.forEach(filter_btn => {
      filter_btn.classList.remove('active');
    });
    filter_btn.classList.add('active');
    let selected = filter_btn.getAttribute('data-project');
    projects.forEach((project, index) => {
      let project_length = projects.length;
      if (
        project.getAttribute('data-project') === selected ||
        selected === 'todos'
      ) {
        if (project.style.transition) {
          project.style.transition = '0.5s';
        } else {
          project.style.transition = `width 0.5s ease ${
            index / project_length + 0.6
          }s,height 0.5s ease ${index / project_length + 0.6}s`;
        }
        project.classList.add('show');
        project.classList.remove('hide');
      } else {
        project.style.transition = `width 0.5s ease ${
          index / project_length + 0.6
        }s,height 0.5s ease ${index / project_length + 0.6}s`;
        project.classList.remove('show');
        project.classList.add('hide');
      }
    });
  });
});