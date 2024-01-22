const Dashboard = () => {
    return ` <div class="overview">
    <div class="title">
        <div class="title-svg">
            <svg class="dash-svg" width="512" height="512" viewBox="0 0 512 512" fill="css"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M256 106.667C218.553 106.668 181.765 116.526 149.335 135.25C116.905 153.974 89.9753 180.905 71.252 213.336C52.5287 245.766 42.6719 282.554 42.6721 320.001C42.6724 357.449 52.5297 394.236 71.2534 426.667C74.0823 431.589 78.7509 435.186 84.2319 436.666C89.713 438.147 95.5576 437.389 100.48 434.56C105.402 431.731 108.999 427.063 110.48 421.581C111.96 416.1 111.202 410.256 108.373 405.333C93.2575 379.437 85.3053 349.985 85.3334 320C85.3436 293.828 91.3729 268.009 102.955 244.539C114.538 221.069 131.362 200.578 152.129 184.649C172.896 168.72 197.048 157.781 222.717 152.677C248.387 147.573 274.886 148.441 300.167 155.214C325.447 161.987 348.832 174.483 368.511 191.737C388.191 208.991 403.638 230.54 413.66 254.717C423.681 278.895 428.008 305.053 426.305 331.17C424.602 357.287 416.916 382.662 403.84 405.333C402.43 407.768 401.515 410.458 401.148 413.248C400.781 416.038 400.97 418.873 401.704 421.589C402.438 424.306 403.702 426.851 405.423 429.077C407.144 431.303 409.289 433.166 411.733 434.56C416.632 437.341 422.432 438.072 427.867 436.594C433.302 435.115 437.932 431.546 440.747 426.667C459.47 394.236 469.328 357.449 469.328 320.001C469.328 282.554 459.471 245.766 440.748 213.336C422.025 180.905 395.095 153.974 362.665 135.25C330.235 116.526 293.447 106.668 256 106.667ZM316.587 229.547L283.52 262.4C274.961 258.18 265.543 255.99 256 256C243.342 256 230.968 259.754 220.444 266.786C209.919 273.818 201.716 283.814 196.872 295.508C192.028 307.203 190.76 320.071 193.23 332.486C195.699 344.901 201.795 356.304 210.745 365.255C219.696 374.205 231.099 380.301 243.514 382.77C255.929 385.24 268.797 383.972 280.492 379.128C292.186 374.284 302.182 366.081 309.214 355.557C316.247 345.032 320 332.658 320 320C319.985 310.528 317.796 301.186 313.6 292.693L346.667 259.84C348.666 257.857 350.253 255.497 351.336 252.898C352.419 250.298 352.977 247.51 352.977 244.693C352.977 241.877 352.419 239.089 351.336 236.489C350.253 233.889 348.666 231.53 346.667 229.547C342.67 225.573 337.263 223.343 331.627 223.343C325.991 223.343 320.584 225.573 316.587 229.547ZM256 341.333C250.342 341.333 244.916 339.086 240.915 335.085C236.914 331.084 234.667 325.658 234.667 320C234.667 314.342 236.914 308.916 240.915 304.915C244.916 300.914 250.342 298.667 256 298.667C261.567 298.633 266.926 300.777 270.933 304.64C272.975 306.641 274.593 309.032 275.693 311.67C276.792 314.309 277.35 317.142 277.333 320C277.333 325.658 275.086 331.084 271.085 335.085C267.084 339.086 261.658 341.333 256 341.333Z"
                    fill="css" />
            </svg>
        </div>
        <span class="text">Dashboard</span>
    </div>
    <div class="boxes">
        <div class="box box1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>                                                   
            <span class="text">Total Likes</span>
            <span class="number">66,111</span>
        </div>
        <div class="box box2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>                                                   
            <span class="text">Comments</span>
            <span class="number">22,161</span>
        </div>
        <div class="box box3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>                                                   
            <span class="text">Total Share</span>
            <span class="number">16,116</span>
        </div>
    </div>
</div>

<div class="activity">
    <div class="title">
        <div class="title-svg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>                          
        </div>
        <span class="text">Recent Activity</span>
    </div>

    <div class="activity-data">
        <div class="data names">
            <span class="data-title">Name</span>
            <span class="data-list">A A</span>
            <span class="data-list">S S</span>
            <span class="data-list">O A</span>
            <span class="data-list">R A</span>
        </div>
        <div class="data email">
            <span class="data-title">Email</span>
            <span class="data-list">AA@gmail.com</span>
            <span class="data-list">SS@gmail.com</span>
            <span class="data-list">OA@gmail.com</span>
            <span class="data-list">RA@gmail.com</span>
        </div>
        <div class="data joined">
            <span class="data-title">joined</span>
            <span class="data-list">2023-10-20</span>
            <span class="data-list">2023-02-11</span>
            <span class="data-list">2023-06-12</span>
            <span class="data-list">2023-08-18</span>
        </div>
        <div class="data type">
            <span class="data-title">Type</span>
            <span class="data-list">New</span>
            <span class="data-list">New</span>
            <span class="data-list">New</span>
            <span class="data-list">New</span>
        </div>
        <div class="data status">
            <span class="data-title">Status</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
            <span class="data-list">Liked</span>
        </div>
    </div>
</div>`;
}


export default Dashboard;