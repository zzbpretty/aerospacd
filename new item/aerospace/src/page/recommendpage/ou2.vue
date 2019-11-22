<template>
    <div>
      <Header></Header>
      <div class="s-top">
          <div class="s-top-left">
              <img src="../../assets/img/timg.jpg" alt="" style="width:90px;height:80px;line-height:60px;margin-left:50px;margin-bottom:15px;border-radius:50%">
          </div>
          <div class="s-top-right">.
          <Search></Search>
          </div>
      </div>

      <div class="c-content">
        <div class="c-title">
            <h1>Apollo astronaut champions Hera for planetary defence</h1>
        </div>
        <div class="c-c-content">
            <p>“For asteroid deflection by kinetic impact, we stopped talking about a single deflection mission and we’ve started talking about a deflection campaign instead, based on an observer spacecraft as well as the impactor spacecraft,” explains Schweickart, who became the first astronaut to fly the Lunar Module during the Apollo 9 mission in March 1969.</p>
            <p>After departing NASA, Schweickart remained active in the space arena, working with cosmonauts to establish the Association of Space Explorers. Then in 2002 he helped found the B612 Foundation, devoted to saving Earth from asteroid impacts – its name taken from the planetoid in children’s classic The Little Prince.</p>
            <p>Now, after years of patient research and advocacy, the first practical test of planetary deflection is going to happen. NASA’s Double Asteroid Redirect Test will slam into the smaller of the Didymos binary asteroids in late 2022. Then – if approved at ESA’s Space19+ gathering of Europe’s space ministers in late November – ESA’s Hera mission will perform a close-up survey of the asteroid and human-made crater after impact.</p>
            <p> He explains: “With Hera we’ll be able to validate a significant proportion of what an operational observer spacecraft would do: for instance, find out how precisely we can determine the post-impact orbit – what is the level of accuracy we’re going to achieve?</p>
            <p>“And one of the key unknowns of the kinetic impactor technique is a term we call ‘beta’ – when we hit the asteroid, how much stuff is going to come flying off? If it’s moving at greater than escape velocity, then that adds to the momentum shifting the orbit, boosting the technique’s effectiveness. That factor depends on the asteroid’s composition and structure, and we need a close-up look to find out what that is.”</p>
            <p>Schweickart recalls one semi-close encounter with a space rock: “During the Apollo 9 mission we were dark-adapted for an experiment, looking at the spectacular night-time Earth, watching weather fronts, thunder storms and lightning, a really great sight out of the window. Then, who knows who said it first, but one of us said they saw a little flash down there and someone else says ‘yeah, I saw it too,’ but you wouldn’t have mentioned it if the first person hadn’t said it.

“And then we realised: that was a meteor, burning up below us. Wow, below us – which meant it came down through our altitude!”</p>
            <p>He ascribes his current interest in planetary defence to the rise of astrobiology in the 1990s, which included a focus on the earliest possible life on Earth. “One of the related questions was the impact history of Earth, and the incredible levels of energy released by these asteroid strikes.”</p>
            <p>That led in turn to a natural follow-up discussion: “We’re discovering more and more asteroids, and if we find one headed our way, what can we do? Is technology at a point where there’s anything we can do? The answer was a tentative yes, so we formed the B612 Foundation to advance the idea of deflecting asteroids.</p>
            <p>“We came up with our Kennedyesque statement that we were going to change the orbit of an asteroid in a controlled way. It’s a straightforward enough goal but the orbital mechanics are really a non-trivial element, because it’s a multi-body problem, involving the asteroid plus Earth and other planets in solar orbit.</p>
            <p>“Being an astronaut, and in particular working on early rendezvous techniques, was important for understanding the orbital dynamics. There are areas in space called ‘keyholes’ where asteroid orbits are shifted by the influence of Earth and other planets, and most bodies that strike Earth will have passed through such keyholes. In astronautic terms it’s like they undergo a burn, a change in velocity.”</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from "../../components/header"
import Footer from "../../components/footer"
import Search from "../../components/search"
export default {
    components:{
        Header,
        Footer,
        Search
    }
}
</script>
<style >
.s-top{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.s-top-left{
    flex:1;
    margin-right: 30px;
    
}
.s-top-right{
    flex:5;
    padding-bottom: 35px;
}
.c-content{
    width: 1200px ;
    margin: 25px auto;
    padding-bottom: 100px;
    
    /* background-color:salmon; */
}
.c-title{
    border-bottom: #d3d3d3 1px solid;
padding-bottom: 15px;
word-break: break-all;
text-align: center;
}
.c-title h1{
margin: 5px auto 10px;
color: #222;
font: bold 38px/150% "Microsoft Yahei";
clear: both;
}
.c-title p{
    font-size: 16px;
    font-family: "Microsoft Yahei";
    
}
.c-data{
    height: 36px;
    font: normal 12px/200% "Microsoft Yahei";
    line-height: 44px;
color: #666;
}
.c-c-content{
    margin: 30px 100px;
}
.c-c-content p{
    margin: 25px 0;
    color: #222;
line-height: 180%;
text-indent: 2em;
font: normal 18px/200% "Microsoft Yahei";
}
</style>