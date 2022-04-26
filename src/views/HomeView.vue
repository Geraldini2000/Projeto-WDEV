<template>

    <main>
    
        <div class="text-top"> Videos novos toda as <b>quintas</b> as <b>20h</b> </div>
        <a href="https://www.youtube.com/channel/UCUInlDpWqdFaYsS1D09B1mA" target="_blank">
            <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se" id="subscribe">
        </a>
        <div class="text-buttom">youtube.com/wdevoficial</div>

    </main>

</template>

<script>
export default {
    name: 'Home'

}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home) ;
        justify-content: center;
        align-items: center;
    }
    .text-top {
        color: var(--color-text-light);
        font-size: 20px;
        margin-bottom: 20px;
    }

    #subscribe {
        width: 340px;
    }
    
    .text-buttom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }
    @media (min-width: 700px) {
        #subscribe {
            width: 370px;
        }
        .text-top {
        font-size: 22px;
    }
    }
</style>
