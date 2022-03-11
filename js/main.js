// jQuery(document).ready(function ($) {

// ======================================================================================================== ОБЩЕЕ

/*
$(document).on( 'click', '#elem', function() {
	
});
*/

//-------------------------------------------------------- Запуск слайдера
/*
$( '.slider' ).slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [ 
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
*/

//-------------------------------------------------------- Маска для телефона
//$( '.wpcf7-tel' ).inputmask( '+7 (999) 999-9999', { 'clearIncomplete': true, 'showMaskOnHover': false, 'clearMaskOnLostFocus' : true } );

// });

window.onload = function () {
  /**
   * настройки сайта
   */
  // const settings = {

  // }

  /**
   * Сохраняет путь текущей страницы
   */
  let currentPage = document.location.pathname;

  /**
   * Включение/отключение меню в мобильной версии
   */
  let sidebarMobileHeaderButtonClose = this.document.getElementById('sidebarMobileHeaderButtonClose');
  let wrapSidebarMobile = this.document.getElementById('wrapSidebarMobile');
  let headerMobileButtonMenu = this.document.getElementById('headerMobileButtonMenu');
  if (sidebarMobileHeaderButtonClose && wrapSidebarMobile && headerMobileButtonMenu) {
    headerMobileButtonMenu.addEventListener('click', () => wrapSidebarMobile.classList.remove('displayNone'));
    sidebarMobileHeaderButtonClose.addEventListener('click', () => wrapSidebarMobile.classList.add('displayNone'));
  }

  showElementsCourse();

  function showElementsCourse() {
    let chooseCourse = document.getElementById('chooseCourse');
    let courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
    let courseSlimming = document.getElementById('courseSlimming');
    let courseReliefPress = document.getElementById('courseReliefPress');
    let courseHealthyBack = document.getElementById('courseHealthyBack');

    if (chooseCourse) {
      chooseCourse.classList.remove('chooseCourseUntil');
      chooseCourse.classList.add('transition_1');
    }

    if (courseBeautifulButtocks) {
      courseBeautifulButtocks.classList.remove('courseBeautifulButtocksUntil');
      courseBeautifulButtocks.classList.add('transition_2');
    }

    if (courseSlimming) {
      courseSlimming.classList.remove('courseSlimmingUntil');
      courseSlimming.classList.add('transition_3');
    }

    if (courseReliefPress) {
      courseReliefPress.classList.remove('courseReliefPressUntil');
      courseReliefPress.classList.add('transition_4');
    }

    if (courseHealthyBack) {
      courseHealthyBack.classList.remove('courseHealthyBackUntil');
      courseHealthyBack.classList.add('transition_5');
    }
  }


  /**
   * Обработка событий на странице descriptionTrenings.html
   */
  const descriptionTrenings = {
    inventoryItems: null,
    inventoryArrowBck: null,
    inventoryArrowfrwd: null,
    currentBlock: null,
    wrapDays: null,
    buttonFullProgramm: null,
    daysImgClose: null,
    daysArrowBck: null,
    daysArrowFrwrd: null,
    daysFullProgramm: null,
    currentDay: null,
    day1ProgramCompleted: null,
    day2ProgramCompleted: null,
    day3ProgramCompleted: null,
    day4ProgramCompleted: null,
    day5ProgramCompleted: null,
    day6ProgramCompleted: null,
    day7ProgramCompleted: null,
    day8ProgramCompleted: null,
    day9ProgramCompleted: null,
    day10PprograCompleted: null,
    day11PprograCompleted: null,
    day12prograCompleted: null,
    prevDayWithStatusSet: null,
    footer: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      //для блока с классом .inventory
      this.inventoryItems = document.querySelectorAll('.inventory__item');
      this.inventoryArrowBck = document.getElementById('inventory__arrow-bck');
      this.inventoryArrowfrwd = document.getElementById('inventory__arrow-frwd');
      this.inventoryArrowBck.addEventListener('click', () => this.moveHandler());
      this.inventoryArrowfrwd.addEventListener('click', () => this.moveHandler());
      this.currentBlock = 0;

      //для блока с классом .wrap__days
      this.wrapDays = document.getElementById('wrap__days');
      this.buttonFullProgramm = document.getElementById('button-full-programm');
      this.buttonFullProgramm.addEventListener('click', () => this.showWrapsDay());
      this.daysImgClose = document.getElementById('days__img_close');
      this.daysImgClose.addEventListener('click', () => this.hideWrapsDay());
      this.daysArrowBck = document.getElementById('days__arrow_bck');
      this.daysArrowFrwrd = document.getElementById('days__arrow_frwrd');
      this.daysArrowBck.addEventListener('click', () => this.movePrevDay());
      this.daysArrowFrwrd.addEventListener('click', () => this.moveNextDay());
      this.daysFullProgramm = document.querySelectorAll('#day__full-programm');
      this.currentDay = 0;
      this.footer = document.querySelector('.wrap-footer');

      // для блока с классом .trainingProgram
      this.trainingProgram = document.getElementById('trainingProgram');
      this.trainingProgram.addEventListener('click', (event) => this.clickHandler(event));

    },

    /**
     * обрабатывает клик по кнопке назад в блоке "Инвентарь"
     */
    moveHandler() {
      this.currentBlock === 0 ? this.currentBlock = 1 : this.currentBlock = 0;
      switch (this.currentBlock) {
        case 0:
          this.inventoryItems[0].classList.remove('inventory__item_displayNone');
          this.inventoryItems[1].classList.remove('inventory__item_displayNone');
          this.inventoryItems[3].classList.add('inventory__item_displayNone');
          this.inventoryItems[4].classList.add('inventory__item_displayNone');
          break;
        case 1:
          this.inventoryItems[0].classList.add('inventory__item_displayNone');
          this.inventoryItems[1].classList.add('inventory__item_displayNone');
          this.inventoryItems[3].classList.remove('inventory__item_displayNone');
          this.inventoryItems[4].classList.remove('inventory__item_displayNone');
          break;
      }
    },

    /**
     *Убирает у блока с классом wrap__days класс wrap__days_hide,
     делая видимым модальное окно с полной программой по дням.
     Добавляет класс подвалу, делая его невидидимым. 
     */
    showWrapsDay() {
      this.wrapDays.classList.remove('wrap__days_hide');
      this.footer.classList.add('displayNone');
    },

    /**
     *Устанавливает блоку с классом wrap__days класс wrap__days_hide,
     делая невидимым модальное окно с полной программой по дням. 
     */
    hideWrapsDay() {
      this.wrapDays.classList.add('wrap__days_hide');
    },

    /**
     * Обрабатывает клик по кнопке назад в блоке c классом wrap__days
     */
    movePrevDay() {
      if (this.currentDay - 1 < 0) {
        this.daysFullProgramm[this.currentDay].classList.add('displayNone');
        this.currentDay = 11;
        this.daysFullProgramm[this.currentDay].classList.remove('displayNone');
        return
      }
      this.daysFullProgramm[this.currentDay].classList.add('displayNone');
      this.currentDay--;
      this.daysFullProgramm[this.currentDay].classList.remove('displayNone');
    },

    /**
     * Обрабатывает клик по кнопке вперёд в блоке c классом wrap__days
     */
    moveNextDay() {
      if (this.currentDay + 1 > 11) {
        this.daysFullProgramm[this.currentDay].classList.add('displayNone');
        this.currentDay = 0;
        this.daysFullProgramm[this.currentDay].classList.remove('displayNone');
        return
      }
      this.daysFullProgramm[this.currentDay].classList.add('displayNone');
      this.currentDay++;
      this.daysFullProgramm[this.currentDay].classList.remove('displayNone');
    },

    /**
     * Обрабатывает клик по блоку с классом . trainingProgram__input
     */
    clickHandler(event) {

      this.prevDayWithStatusSet = event.target.id;
      let imgCheckboxElementClassList = event.target.nextElementSibling.classList;
      let checkTrainingProgramElementClassList = event.target.parentElement.parentElement.classList;

      switch (event.target.id) {
        case 'input__trainingProgram_Day1':
          this.day1ProgramCompleted = !this.day1ProgramCompleted;
          if (this.day1ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day2':
          this.day2ProgramCompleted = !this.day2ProgramCompleted;
          if (this.day2ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day3':
          this.day3ProgramCompleted = !this.day3ProgramCompleted;
          if (this.day3ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day4':
          this.day4ProgramCompleted = !this.day4ProgramCompleted;
          if (this.day4ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day5':
          this.day5ProgramCompleted = !this.day5ProgramCompleted;
          if (this.day5ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day6':
          this.day6ProgramCompleted = !this.day6ProgramCompleted;
          if (this.day6ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day7':
          this.day7ProgramCompleted = !this.day7ProgramCompleted;
          if (this.day7ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day8':
          this.day8ProgramCompleted = !this.day8ProgramCompleted;
          if (this.day8ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day9':
          this.day9ProgramCompleted = !this.day9ProgramCompleted;
          if (this.day9ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day10':
          this.day10ProgramCompleted = !this.day10ProgramCompleted;
          if (this.day10ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day11':
          this.day11ProgramCompleted = !this.day11ProgramCompleted;
          if (this.day11ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
        case 'input__trainingProgram_Day12':
          this.day12ProgramCompleted = !this.day12ProgramCompleted;
          if (this.day12ProgramCompleted) {
            imgCheckboxElementClassList.remove('displayNone');
            checkTrainingProgramElementClassList.add('check__trainingProgram_dark');
          } else {
            imgCheckboxElementClassList.add('displayNone');
            checkTrainingProgramElementClassList.remove('check__trainingProgram_dark');
          }
          break;
      }

    }

  };
  //descriptionTrenings.html end


  /**
   * Обработка событий на странице katalog.html
   */
  const katalog = {
    chooseCourse: null,
    courseBeautifulButtocks: null,
    courseSlimming: null,
    courseReliefPress: null,
    courseHealthyBack: null,
    chooseLevel: null,
    // courseBeautifulButtocksHidden: null,
    courseHealthyBackHidden: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.chooseCourse = document.getElementById('chooseCourse');
      this.courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
      this.courseSlimming = document.getElementById('courseSlimming');
      this.courseReliefPress = document.getElementById('courseReliefPress');
      this.courseHealthyBack = document.getElementById('courseHealthyBack');
      this.chooseLevel = document.getElementById('chooseLevel');

      this.showElementsCourse();

      this.courseBeautifulButtocks.addEventListener('click', (event) => this.showLevelBeautifulButtocks(event));
      this.courseSlimming.addEventListener('click', (event) => this.showLevelSlimming(event));
      this.courseReliefPress.addEventListener('click', (event) => this.showLevelReliefPress(event));
      this.courseHealthyBack.addEventListener('click', (event) => this.showLevelHealthyBack(event));

    },


    /**
     *Показывает элементы блока Выбери Курс 
     */
    showElementsCourse() {
      this.chooseCourse.classList.remove('chooseCourseUntil');
      this.chooseCourse.classList.add('transition_1');

      this.courseBeautifulButtocks.classList.remove('courseBeautifulButtocksUntil');
      this.courseBeautifulButtocks.classList.add('transition_2');

      this.courseSlimming.classList.remove('courseSlimmingUntil');
      this.courseSlimming.classList.add('transition_3');

      this.courseReliefPress.classList.remove('courseReliefPressUntil');
      this.courseReliefPress.classList.add('transition_4');

      this.courseHealthyBack.classList.remove('courseHealthyBackUntil');
      this.courseHealthyBack.classList.add('transition_5');
    },

    /**
     * Показывает заголовок "Выбери уровень"
     */
    showElementChooseLevel() {
      this.chooseLevel.classList.remove('chooseLevelUntil');
      this.chooseLevel.classList.add('transition_0');
    },



    /**
     * По клику меняет стиль кнопки курса "Красивые ягодицы", показывает заголовок курса и курсы
     */
    // showLevelBeautifulButtocks(event) {
    //   this.showElementChooseLevel();
    //   let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
    //   tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
    //   this.courseBeautifulButtocks.classList.add('tabs-course-a-clicked');
    //   event.preventDefault();
    // },

    /**
     *По клику меняет стиль кнопки курса "Похудение", показывает заголовок курса и курсы
     */
    // showLevelSlimming(event) {
    //   this.showElementChooseLevel();

    //   let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
    //   tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
    //   courseSlimming.classList.add('tabs-course-a-clicked');

    //   event.preventDefault();
    // },


    /**
     * По клику Меняет стиль кнопки курса "Рельефный пресс", показывает заголовок курса и курсы
     */
    // showLevelReliefPress(event) {
    //   this.showElementChooseLevel();

    //   let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
    //   tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
    //   courseReliefPress.classList.add('tabs-course-a-clicked');

    //   event.preventDefault();
    // },

    /**
     *По клику показывает элементы блока Выбери уровень 
     */
    showLevelHealthyBack(event) {

      this.showElementChooseLevel();

      // let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
      // tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
      // this.courseHealthyBack.classList.add('tabs-course-a-clicked');

      this.courseBeautifulButtocksHidden = document.getElementById('courseHealthyBackHidden');
      this.courseBeautifulButtocksHidden.classList.remove('courseHealthyBackUntil');
      let nonpro = document.getElementById('nonpro');
      nonpro.classList.remove('nonproUntil');
      nonpro.classList.add('transition_1');

      let prof1 = document.getElementById('prof1');
      prof1.classList.remove('prof1Until');
      prof1.classList.add('transition_2');

      let prof2 = document.getElementById('prof2');
      prof2.classList.remove('prof2Until');
      prof2.classList.add('transition_3');

      let prof3 = document.getElementById('prof3');
      prof3.classList.remove('prof3Until');
      prof3.classList.add('transition_4');

      let prof4 = document.getElementById('prof4');
      prof4.classList.remove('prof4Until');
      prof4.classList.add('transition_5');

      let prof5 = document.getElementById('prof5');
      prof5.classList.remove('prof5Until');
      prof5.classList.add('transition_6');

      event.preventDefault();
    },


  };
  //katalog.html end


  /**
   * Обработка событий на странице relefnyj-press.html
   */
  const relefnyjPress = {
    chooseCourse: null,
    courseBeautifulButtocks: null,
    courseSlimming: null,
    courseReliefPress: null,
    courseHealthyBack: null,
    chooseLevel: null,
    courseReliefPressHidden: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.chooseCourse = document.getElementById('chooseCourse');
      this.courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
      this.courseSlimming = document.getElementById('courseSlimming');
      this.courseReliefPress = document.getElementById('courseReliefPress');
      this.courseHealthyBack = document.getElementById('courseHealthyBack');
      this.chooseLevel = document.getElementById('chooseLevel');

      this.showElementsChooseLevel();
    },

    /**
     * Показывает заголовок "Выбери уровень"
     */
    showElementChooseLevel() {
      this.chooseLevel.classList.remove('chooseLevelUntil');
      this.chooseLevel.classList.add('transition_0');
    },

    /**
     * Показывает элементы блока Выбери Уровень
     */
    showElementsChooseLevel() {
      this.showElementChooseLevel();

      let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
      tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
      courseReliefPress.classList.add('tabs-course-a-clicked');

      this.courseReliefPressHidden = document.getElementById('courseReliefPressHidden');
      this.courseReliefPressHidden.classList.remove('courseReliefPressUntil');
      let nonpro = document.getElementById('nonpro');
      nonpro.classList.remove('nonproUntil');
      nonpro.classList.add('transition_1');

      let prof1 = document.getElementById('prof1');
      prof1.classList.remove('prof1Until');
      prof1.classList.add('transition_2');

      let prof2 = document.getElementById('prof2');
      prof2.classList.remove('prof2Until');
      prof2.classList.add('transition_3');

      let prof3 = document.getElementById('prof3');
      prof3.classList.remove('prof3Until');
      prof3.classList.add('transition_4');

      let prof4 = document.getElementById('prof4');
      prof4.classList.remove('prof4Until');
      prof4.classList.add('transition_5');

      let prof5 = document.getElementById('prof5');
      prof5.classList.remove('prof5Until');
      prof5.classList.add('transition_6');

    },


  };
  //relefnyj-press.html end


  /**
   * Обработка событий на странице zdorovaya-spina.html
   */
  const zdorovayaSpina = {
    chooseCourse: null,
    courseBeautifulButtocks: null,
    courseSlimming: null,
    courseReliefPress: null,
    courseHealthyBack: null,
    chooseLevel: null,
    courseHealthyBackHidden: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.chooseCourse = document.getElementById('chooseCourse');
      this.courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
      this.courseSlimming = document.getElementById('courseSlimming');
      this.courseReliefPress = document.getElementById('courseReliefPress');
      this.courseHealthyBack = document.getElementById('courseHealthyBack');
      this.chooseLevel = document.getElementById('chooseLevel');

      this.showElementsChooseLevel();

    },

    /**
     * Показывает заголовок "Выбери уровень"
     */
    showElementChooseLevel() {
      this.chooseLevel.classList.remove('chooseLevelUntil');
      this.chooseLevel.classList.add('transition_0');
    },

    /**
     * Показывает элементы блока Выбери Уровень
     */
    showElementsChooseLevel() {
      this.showElementChooseLevel();

      let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
      tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
      courseHealthyBack.classList.add('tabs-course-a-clicked');

      this.courseHealthyBackHidden = document.getElementById('courseHealthyBackHidden');
      this.courseHealthyBackHidden.classList.remove('courseHealthyBackUntil');
      let nonpro = document.getElementById('nonpro');
      nonpro.classList.remove('nonproUntil');
      nonpro.classList.add('transition_1');

      let prof1 = document.getElementById('prof1');
      prof1.classList.remove('prof1Until');
      prof1.classList.add('transition_2');

      let prof2 = document.getElementById('prof2');
      prof2.classList.remove('prof2Until');
      prof2.classList.add('transition_3');

      let prof3 = document.getElementById('prof3');
      prof3.classList.remove('prof3Until');
      prof3.classList.add('transition_4');

      let prof4 = document.getElementById('prof4');
      prof4.classList.remove('prof4Until');
      prof4.classList.add('transition_5');

      let prof5 = document.getElementById('prof5');
      prof5.classList.remove('prof5Until');
      prof5.classList.add('transition_6');
    },

  }
  //zdorovaya-spina.html end

  /**
   * Обработка событий на странице pohudenie.html
   */
  const pohudenie = {
    chooseCourse: null,
    courseBeautifulButtocks: null,
    courseSlimming: null,
    courseReliefPress: null,
    courseHealthyBack: null,
    chooseLevel: null,
    coursePohudenieHidden: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.chooseCourse = document.getElementById('chooseCourse');
      this.courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
      this.courseSlimming = document.getElementById('courseSlimming');
      this.courseReliefPress = document.getElementById('courseReliefPress');
      this.courseHealthyBack = document.getElementById('courseHealthyBack');
      this.chooseLevel = document.getElementById('chooseLevel');

      this.showElementsChooseLevel();
    },

    /**
     * Показывает заголовок "Выбери уровень"
     */
    showElementChooseLevel() {
      this.chooseLevel.classList.remove('chooseLevelUntil');
      this.chooseLevel.classList.add('transition_0');
    },

    /**
     * Показывает элементы блока Выбери Уровень
     */
    showElementsChooseLevel() {
      this.showElementChooseLevel();

      let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
      tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
      courseSlimming.classList.add('tabs-course-a-clicked');

      this.courseSlimmingHidden = document.getElementById('courseSlimmingHidden');
      this.courseSlimmingHidden.classList.remove('courseSlimmingUntil');
      let nonpro = document.getElementById('nonpro');
      nonpro.classList.remove('nonproUntil');
      nonpro.classList.add('transition_1');

      let prof1 = document.getElementById('prof1');
      prof1.classList.remove('prof1Until');
      prof1.classList.add('transition_2');

      let prof2 = document.getElementById('prof2');
      prof2.classList.remove('prof2Until');
      prof2.classList.add('transition_3');

      let prof3 = document.getElementById('prof3');
      prof3.classList.remove('prof3Until');
      prof3.classList.add('transition_4');

      let prof4 = document.getElementById('prof4');
      prof4.classList.remove('prof4Until');
      prof4.classList.add('transition_5');

      let prof5 = document.getElementById('prof5');
      prof5.classList.remove('prof5Until');
      prof5.classList.add('transition_6');
    },

  }
  //pohudenie.html end

  /**
   * Обработка событий на странице krasivye-yagoditsy.html
   */
  const krasivyeYagoditsy = {
    chooseCourse: null,
    courseBeautifulButtocks: null,
    courseSlimming: null,
    courseReliefPress: null,
    courseHealthyBack: null,
    chooseLevel: null,
    courseBeautifulButtocksHidden: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.chooseCourse = document.getElementById('chooseCourse');
      this.courseBeautifulButtocks = document.getElementById('courseBeautifulButtocks');
      this.courseSlimming = document.getElementById('courseSlimming');
      this.courseReliefPress = document.getElementById('courseReliefPress');
      this.courseHealthyBack = document.getElementById('courseHealthyBack');
      this.chooseLevel = document.getElementById('chooseLevel');

      this.showElementsChooseLevel();
    },

    /**
     * Показывает заголовок "Выбери уровень"
     */
    showElementChooseLevel() {
      this.chooseLevel.classList.remove('chooseLevelUntil');
      this.chooseLevel.classList.add('transition_0');
    },

    /**
     * Показывает элементы блока Выбери Уровень
     */
    showElementsChooseLevel() {
      this.showElementChooseLevel();

      let tabsCourseAClicked = document.querySelector('.tabs-course-a-clicked');
      tabsCourseAClicked ? tabsCourseAClicked.classList.remove('tabs-course-a-clicked') : '';
      courseBeautifulButtocks.classList.add('tabs-course-a-clicked');

      this.courseBeautifulButtocksHidden = document.getElementById('courseBeautifulButtocksHidden');
      this.courseBeautifulButtocksHidden.classList.remove('courseBeautifulButtocksUntil');
      let nonpro = document.getElementById('nonpro');
      nonpro.classList.remove('nonproUntil');
      nonpro.classList.add('transition_1');

      let prof1 = document.getElementById('prof1');
      prof1.classList.remove('prof1Until');
      prof1.classList.add('transition_2');

      let prof2 = document.getElementById('prof2');
      prof2.classList.remove('prof2Until');
      prof2.classList.add('transition_3');

      let prof3 = document.getElementById('prof3');
      prof3.classList.remove('prof3Until');
      prof3.classList.add('transition_4');

      let prof4 = document.getElementById('prof4');
      prof4.classList.remove('prof4Until');
      prof4.classList.add('transition_5');

      let prof5 = document.getElementById('prof5');
      prof5.classList.remove('prof5Until');
      prof5.classList.add('transition_6');
    },

  };
  //krasivye-yagoditsy.html end

  /**
   * Обработка событий на странице tvoj-profil.html
   */
  const tvojProfil = {
    yourProfileMobile: null,
    summarySocialNetworkMobile: null,
    summaryCountryMobile: null,
    setYourProfileForDetailsOpen: false,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.yourProfileMobile = document.getElementById('yourProfileMobile');
      this.summarySocialNetworkMobile = document.getElementById('summarySocialNetworkMobile');
      this.summaryCountryMobile = document.getElementById('summaryCountryMobile');
      
      this.summarySocialNetworkMobile.addEventListener('click', () => this.addClassYourProfileForDetailsOpen());
      this.summaryCountryMobile.addEventListener('click', () => this.addClassYourProfileForDetailsOpen());
    },
    
    /**
     * Добавляет и убирает класс your-profile_for-details-open элементу с id yourProfileMobile,
     * который делает экран для мобильной версии темным 
     */
    addClassYourProfileForDetailsOpen() {
      if (this.setYourProfileForDetailsOpen) {
        this.yourProfileMobile.classList.remove('your-profile_for-details-open');
        this.setYourProfileForDetailsOpen = false;
      }else{
        this.yourProfileMobile.classList.add('your-profile_for-details-open');
        this.setYourProfileForDetailsOpen = true;
      }      
    }

  };
  //tvoj-profil.html end

  /**
   * Обработка событий на странице faq.html
   */
  const faq = {
    buttonCommonTopicsA: null,
    faqMobileClickButtonCommonTopicsA: null,
    buttonCommonTopicsB: null,
    buttonCommonTopicsC: null,
    faqPageButtons: null,
    imgDropDownDark: null,

    /**
     * инициализация объекта страницы
     */
    init() {
      this.buttonCommonTopicsA = document.getElementById('buttonCommonTopicsA');
      this.faqMobileClickButtonCommonTopicsA = document.getElementById('faqMobileClickButtonCommonTopicsA');
      this.faqPageButtons = document.getElementById('faqPageButtons');
      this.buttonCommonTopicsB = document.getElementById('buttonCommonTopicsB');
      this.buttonCommonTopicsC = document.getElementById('buttonCommonTopicsC');
      this.imgDropDownDark = document.getElementById('imgDropDownDark');
      this.buttonCommonTopicsA.addEventListener('click', ()=>this.handlerButtonCommonTopicsAClick());      
    },

    /**
     * Устанавливает и убирает классы
     */
    handlerButtonCommonTopicsAClick(){
      this.faqMobileClickButtonCommonTopicsA.classList.remove('displayNone');
      this.faqPageButtons.classList.add('height300');
      this.buttonCommonTopicsB.classList.remove('displayNone');
      this.buttonCommonTopicsC.classList.remove('displayNone');
      this.imgDropDownDark.classList.add('displayNone');
    }    

  };

  //faq.html end

  /**
   *инициализирует объект текущей страницы 
   */
  currentPage.includes('descriptiontrenings') ? descriptionTrenings.init() : '';
  currentPage.includes('katalog') ? katalog.init() : '';
  currentPage.includes('relefnyj-press') ? relefnyjPress.init() : '';
  currentPage.includes('zdorovaya-spina') ? zdorovayaSpina.init() : '';
  currentPage.includes('pohudenie') ? pohudenie.init() : '';
  currentPage.includes('krasivye-yagoditsy') ? krasivyeYagoditsy.init() : '';
  currentPage.includes('tvoj-profil') ? tvojProfil.init() : '';
  currentPage.includes('faq') ? faq.init() : '';

  currentPage.includes('faq') ? console.log('Страница ' + ' ' + currentPage + ' загружена') : 'Не загружена';
}


// $(function () {
//   $("#accordion").accordion();
// });