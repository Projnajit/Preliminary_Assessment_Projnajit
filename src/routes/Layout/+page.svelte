<script>
    import TailwindCss from "../../TailwindCSS.svelte";
</script>


<body>
    <div class="h-screen bg-white">
        <div class="max-w-7xl-no-margin mx-auto px-4 sm:px-6 lg:px-8">
            <div class="h-screen bg-white">
                <div class="max-w-7xl-no-margin mx-auto px-4 sm:px-6 lg:px-8">
                   
                    <div class="hidden sm:grid grid-cols-12">
                        <div class="bg-blue-400 row-span-3 col-span-2 shadow-xl"><div class="h-60 "></div></div>
                        <div class="bg-rose-100 row-span-5 col-span-4 shadow-xl"><div class="h-60  "></div></div>
                        <div class="bg-sky-400 row-span-2 col-span-6 shadow-xl"><div class="h-60  "></div></div>
                        <div class="bg-yellow-100 row-span-4 col-span-4 shadow-xl"><div class="h-60 l"></div></div>
                        <div class="bg-emerald-400 row-span-4 col-span-2 shadow-xl"><div class="h-60  "></div></div>
                        <div class="bg-teal-400 row-span-2 col-span-2 shadow-xl"><div class="h-60 "></div></div>
                        <div class="bg-fuchsia-400 row-span-1 col-span-6 shadow-xl"><div class="h-60 "></div></div>    
                    </div> 
    
                  
                     <div class="sm:hidden grid grid-cols-4 custom-full-height content">
                        <div class="bg-rose-100 row-span-3 col-span-4 shadow-xl"><div class="h-80" ></div></div>
                        <div class="bg-yellow-100 row-span-3 col-span-4 shadow-xl"><div class="h-80"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</body>




<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100%;
    }
    .max-w-7xl-no-margin{
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .custom-full-height{
        margin: 0;
        padding: 0;
    }

    .content {
        height: 100vh;
        overflow: hidden; /* Prevent overflowing content */
    }
</style>
