const elSlideShow = document.querySelector(".slide-show");
const elSlideShowPanel = elSlideShow.querySelectorAll(".slide-show_panel");
const delayTime = 2;
const durationTime = 4;

const tl = gsap.timeline({
  repeat: -1, //無限に繰り返す
  delay: delayTime, //アニメーション間で待機時間を作る
  defaults: {
    //timelineでのデフォルトを作成
    duration: durationTime, //アニメーション時間を設定
    ease: "power1.out" //アニメーションの緩急を設定
  }
});

tl.to(
  elSlideShowPanel[0], //１枚目のパネルについて
  {
    opacity: 0
  }
)
  .to(
    elSlideShowPanel[1],
    {
      opacity: 1
    },
    "<"
  )
  .to(elSlideShowPanel[1], {
    opacity: 0
  })
  .to(
    elSlideShowPanel[2],
    {
      opacity: 1
    },
    "<"
  )
  .to(elSlideShowPanel[2], {
    opacity: 0
  })
  .to(
    elSlideShowPanel[0],
    {
      opacity: 1
    },
    "<"
  );