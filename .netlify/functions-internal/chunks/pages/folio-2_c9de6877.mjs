function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../../dist/output.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <style>
        #gridd {
            display: grid;
            grid-template-rows:  repeat(6,1fr);
            grid-template-areas:
                "grid1"    
                "grid2 "
                "grid3 "
                "grid4"
                "grid5"
                "grid6" 
            ;
        }
        @media(min-width: 640px) {
            #gridd {
                grid-template-columns:  repeat(4, 1fr);
                grid-template-rows:  repeat(3,1fr);
                grid-template-areas:
                    "grid1 grid1 grid2 grid3"    
                    "grid1 grid1 grid2 grid3 "
                    "grid1 grid1 grid2 grid3 "
                    "grid1 grid1 grid4 grid4 "
                    "grid1 grid1 grid4 grid4 "
                    "grid1 grid1 grid4 grid4 "
                    "grid1 grid1 grid4 grid4 "
                    "grid5 grid6 grid4 grid4 "    
                    "grid5 grid6 grid4 grid4 "    
                    "grid5 grid6 grid4 grid4 " ;
            }
        }
        .grid1 {
            grid-area: grid1;
        }
        .grid2 {
            grid-area: grid2;
        }
        .grid3 {
            grid-area: grid3;
        }
        .grid4 {
            grid-area: grid4;
        }
        .grid5 {
            grid-area: grid5;
        }
        .grid6 {
            grid-area: grid6;
        }
    </style>
</head>
<body>
    <section class="border-b-2 border-zinc-300 py-3">
        <div class="container flex flex-wrap mx-auto items-center">
            <div class="text-xs"><i class="fa-solid fa-truck"></i> Free Shipping...</div>
            <div class="ml-auto flex">
                <div class="px-4 border-r-2 border-zinc-300 space-x-4">
                    <a href="#" class="text-xs"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="text-xs"><i class="fa-brands fa-pinterest-p"></i></a>
                </div>
                <div class="px-4 border-r-2 border-zinc-300">
                    <a href="#" class="text-xs">USD <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                </div>
                <div class="px-4 border-r-2 border-zinc-300">
                    <a href="#" class="text-xs">ENG <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                </div>
                <div class="px-4">
                    <a href="#" class="text-xs">Login</a> /
                    <a href="#" class="text-xs">Register</a>
                </div>
            </div>
        </div>
    </section>
    <nav>
        <div class="container mx-auto flex flex-wrap h-16 items-center justify-between px-3">
            <div>
                <a href="#">Logo</a>
            </div>
            <div class="space-x-4">
                <a href="#">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">CATEGORIES</a>
                <a href="#">BLOG</a>
                <a href="#">PAGE</a>
            </div>
            <div class="space-x-3">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </nav>
    <header class="aspect-[21/9]">
        <img src="https://picsum.photos/id/76/1600/900" alt="" class="w-full h-full object-cover">
    </header>
    <section>
        <div class="container mx-auto flex flex-wrap">
            <div class="sm:w-1/3 w-full p-5">
                <figure class="relative aspect-video group">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute inset-0 m-auto bg-zinc-300/80 group-hover:bg-amber-300/20 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline group-hover:text-white duration-300">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
            <div class="sm:w-1/3 w-full p-5">
                <figure class="relative aspect-video">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute inset-0 m-auto bg-zinc-300/80 hover:bg-zinc-300/0 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
            <div class="sm:w-1/3 w-full p-5">
                <figure class="relative aspect-video">
                    <img src="https://picsum.photos/id/92/800/600" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute inset-0 m-auto bg-zinc-300/80 hover:bg-zinc-300/0 duration-300 flex flex-col justify-center pl-5">
                        <div class="text-xs">New Collection</div>
                        <h3 class="text-3xl font-bold">Lamp</h3>
                        <a href="#" class="text-xs underline">Shop Now</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
    <section class="py-24">
        <div class="container mx-auto flex">
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
            <div class="w-1/6 text-center">
                <h4><a href="#" class="text-xl hover:text-amber-400">Table</a></h4>
            </div>
           
        </div>
    </section>
    <section class="py-24">
        <div class="container mx-auto flex">
            <div class="w-full text-center space-y-8 mb-8">
                <h2 class="text-5xl font-bold">New Arrival</h2>
                <p class="w-1/2 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci ipsum molestiae. Itaque molestias animi sunt magni iusto incidunt quae?
                </p>
            </div>  
        </div>
        <div class="container mx-auto flex flex-wrap">
            
            <div class="sm:w-1/4 w-full p-5">
                <div>
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:w-1/4 w-full p-5">
                <div>
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:w-1/4 w-full p-5">
                <div>
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:w-1/4 w-full p-5">
                <div>
                    <figure class="relative group aspect-[4/5]">
                        <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                        <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                        </figcaption>
                    </figure>
                    <div class="space-y-1 pt-2">
                        <h3>Pellensque lacuile sefs</h3>
                        <div class="flex justify-between">
                            <span class="font-bold">
                                $392 <del class="text-xs text-zinc-300">$450</del>
                            </span>
                            <span>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                                <i class="fa-regular fa-star fa-xs"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="gridd">
        <div class="grid1 p-5 lg:w-full">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
        <div class="grid2 p-5 lg:w-full">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
        <div class="grid3 p-5 lg:w-full">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
        <div class="grid4 p-5 lg:w-full">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
        <div class="grid5 p-5 lg:w-full">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
        <div class="grid6 p-5 lg:w-full ">            
                <figure class="relative group">
                    <img src="https://picsum.photos/id/13/700/500" alt="" class="w-full h-full object-cover">
                    <figcaption class="absolute flex flex-col group-hover:bg-black/60 duration-500 inset-0 m-auto items-center justify-center space-y-3">
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#" class="opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 duration-500 inline-block w-9 h-9 bg-white flex items-center justify-center hover:bg-amber-300 rounded-full"><i class="fa-regular fa-heart"></i></a>
                    </figcaption>
                </figure>
                <div class="space-y-1 pt-2">
                    <h3>Pellensque lacuile sefs</h3>
                    <div class="flex justify-between">
                        <span class="font-bold">
                            $392 <del class="text-xs text-zinc-300">$450</del>
                        </span>
                        <span>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                            <i class="fa-regular fa-star fa-xs"></i>
                        </span>
                    </div>
                </div>
        </div>
    </section>
    <section class="py-20">
        <div class="container mx-auto flex">
            <div class="w-1/5 text-center">
                <div>
                    <a href="#">
                        <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt="" class="mx-auto">
                    </a>
                </div>
            </div>
            <div class="w-1/5 text-center">
                <div>
                    <a href="#">
                        <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt="" class="mx-auto">
                    </a>
                </div>
            </div>
            <div class="w-1/5 text-center">
                <div>
                    <a href="#">
                        <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt="" class="mx-auto">
                    </a>
                </div>
            </div>
            <div class="w-1/5 text-center">
                <div>
                    <a href="#">
                        <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt="" class="mx-auto">
                    </a>
                </div>
            </div>
            <div class="w-1/5 text-center">
                <div>
                    <a href="#">
                        <img src="https://demo.wpthemego.com/themes/sw_soaz/wp-content/uploads/2019/04/br2.png" alt="" class="mx-auto">
                    </a>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-zinc-900 text-zinc-50 px-4 py-6 flex justify-between relative">
        <div>
            Design By UYT
        </div>
        <a href="#" class="absolute w-fit h-fit inset-0 m-auto">LOGO</a>
        <div>
            Copyrights&copy;All Rights Reserved.
        </div>
    </footer>
</body>
</html>`
	}
render["astro:html"] = true;

export { render as default };
