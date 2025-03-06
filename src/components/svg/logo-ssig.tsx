import { SVGProps } from 'react'

export function LogoSSIG({
    className,
    fill = 'white',
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 295 132"
            className={className}
        >
            <g fill={fill}>
                <path
                    id="cubes"
                    d="M35.4752 12.3593L50.5888 3.89567C52.0959 3.0018 56.4573 0.251113 57.9298 0.0265668C59.8384 -0.258434 62.6884 1.82294 64.4071 2.75998L75.2025 9.00409C76.3987 9.65614 80.1598 11.6425 80.8205 12.6227C81.356 13.4216 81.248 14.8682 81.248 15.8139V26.6094L89.8844 21.4275C91.0719 20.7237 92.3242 19.7737 93.7708 20.1105C94.6171 20.3048 98.7497 22.7964 99.8162 23.4053L110.612 29.6278C111.799 30.3273 114.684 31.7437 115.353 32.8189C115.889 33.6783 115.794 35.1119 115.794 36.1094V55.9731C115.794 56.9188 115.902 58.3654 115.366 59.1642C114.74 60.0926 112.499 61.1549 111.475 61.7163C109.161 62.9945 106.151 64.6958 104.134 66.3368C106.846 67.127 109.86 69.1997 112.339 70.6506C113.125 71.1084 114.882 71.9677 115.366 72.6543C115.902 73.4272 115.794 74.9127 115.794 75.8368V96.1323C115.794 97.0564 115.902 98.5419 115.366 99.3148C114.839 100.066 111.583 101.746 110.612 102.299L99.3844 108.776C97.9378 109.601 94.453 111.963 92.9071 111.799C91.8708 111.691 89.988 110.438 89.0208 109.886L81.248 105.201V115.564C81.2437 116.847 81.3819 118.233 80.5571 119.308C79.7194 120.405 76.5239 122.085 75.2025 122.84L64.8389 128.821C63.7248 129.434 59.6743 131.87 58.7934 131.986C57.1741 132.202 53.7843 129.814 52.3161 128.955L41.0888 122.538C39.9574 121.89 36.9779 120.297 36.3474 119.286C35.812 118.427 35.907 116.993 35.907 115.996V105.201L28.566 109.64C27.4908 110.248 25.3792 111.578 24.2479 111.79C22.3781 112.144 19.3985 110.041 17.7706 109.083L6.11144 102.359C5.07508 101.768 1.94007 100.157 1.35711 99.3148C0.81734 98.5332 0.929612 97.0607 0.929612 96.1323V72.3822L13.0206 65.9049L4.81599 61.4054C3.99121 60.9347 1.84507 59.9026 1.37007 59.216C0.869157 58.4776 0.93393 57.2685 0.929612 56.4049V36.1094C0.929612 35.1119 0.834612 33.6783 1.37007 32.8189C1.96598 31.8646 3.82712 30.9405 4.81599 30.3748L12.1569 26.1732L20.3615 21.4275C21.549 20.7237 22.8013 19.7737 24.2479 20.1105C25.077 20.3005 27.2663 21.6737 28.1342 22.1703L35.907 26.6094L35.4752 12.3593ZM79.0889 13.223L65.2707 5.32931C63.8846 4.53908 60.1191 2.09066 58.7934 1.93521C57.1914 1.74089 54.2118 3.87408 52.7479 4.70749L37.6343 13.6548L51.4525 21.4275L58.3616 24.9296L64.4071 22.0321L79.0889 13.223ZM37.6343 14.5184C36.8872 16.4055 37.1593 22.5503 37.2024 24.8821C37.224 25.9314 37.1895 26.8123 37.8933 27.676C39.3615 29.4767 45.0788 31.4198 46.262 33.5617C46.7888 34.516 46.7025 35.9021 46.7025 36.973C46.7068 38.5794 46.3441 43.0012 47.3934 44.111C48.0713 44.8321 48.8486 44.8149 49.7252 44.5212C50.9947 44.0981 56.44 40.9501 57.0575 39.9051C57.8261 38.5967 57.5023 31.558 57.4979 29.6321C57.4893 25.4478 57.4245 26.2251 51.4525 22.7187L37.6343 14.5184ZM79.5207 14.9502L66.1343 22.356L59.9032 26.1344L59.2252 29.6321V40.4276C61.3671 41.2178 63.2843 42.5133 65.2707 43.6317C66.2682 44.1931 67.4687 45.0049 68.6691 44.6508C70.1848 44.206 70.0121 42.5435 70.0207 41.2912C70.0294 39.728 69.8393 35.1939 70.3403 33.9892C71.2039 31.9121 77.7762 28.6217 79.9526 27.473L79.5207 14.9502ZM44.5434 33.5185C42.4102 31.5796 32.949 26.4021 29.8615 24.6316C28.4581 23.8285 25.336 21.7471 23.816 21.8723C22.5422 21.9803 18.6342 24.4589 17.3387 25.2276L3.52053 33.0867V33.9503L17.7706 41.9735L23.816 44.966L29.8615 42.0901L44.5434 33.5185ZM113.203 33.0867L99.3844 25.1326L92.9071 21.881L86.8617 24.7612L72.1798 33.5185L87.2935 42.2758C88.7574 43.1092 91.698 45.1387 93.339 44.9401C94.5049 44.8019 98.1322 42.5046 99.3844 41.7878L113.203 33.9503V33.0867ZM3.08871 34.8139L2.65689 41.7231V55.1095L3.3478 58.7324L9.13418 62.364L23.3842 70.2231C22.5508 66.7988 22.961 53.8874 22.9524 49.4958C22.9438 45.3158 22.7451 46.1708 17.3387 43.0142L3.08871 34.8139ZM44.9752 34.8139L31.5888 42.4571C29.9565 43.351 25.621 45.3633 24.9388 46.9826C24.6279 47.7253 24.6797 49.1028 24.6797 49.9276V70.2231L32.0206 66.1554L35.0347 64.0093L35.4752 61.5867L35.7343 53.4599L38.4979 51.1022L45.407 47.3367L44.9752 34.8139ZM72.1798 34.8139C71.4371 36.6837 71.7091 42.4615 71.748 44.7458C71.7653 45.5619 71.7394 46.4558 72.1884 47.1726C72.8362 48.2133 78.6485 51.521 79.9526 52.0176C80.8032 52.2292 80.868 52.1256 81.6798 52.0176L81.248 60.7231L81.6885 64.0093L84.7026 66.1554L92.0435 70.2231V49.9276C92.0349 45.3978 90.9294 45.6008 85.998 42.7724L72.1798 34.8139ZM114.066 34.8139L100.248 42.6471C98.6331 43.554 94.7294 45.3201 94.0299 46.9826C93.719 47.7253 93.7708 49.1028 93.7708 49.9276V70.2231L108.021 62.1395C113.859 58.8145 114.058 59.2592 114.066 55.1095V34.8139ZM78.6571 53.3822L64.8389 45.1733L58.3616 42.0599L51.8843 45.1733L38.0661 53.3822L52.7479 61.9192L58.3616 64.6958L64.8389 61.5004L78.6571 53.3822ZM70.0207 45.6094H69.5889L70.0207 46.0412V45.6094ZM70.4525 46.0412H70.0207L70.4525 46.4731V46.0412ZM37.6343 54.6776C36.9045 56.5129 37.2024 59.5529 37.2024 61.5867V74.9732C37.2111 79.1575 37.2758 78.3802 43.2479 81.8866L57.4979 90.0868V69.7913C57.4893 65.7409 57.4202 66.3713 51.4525 62.947L37.6343 54.6776ZM79.5207 55.1095L66.5662 62.269L59.9032 66.3152L59.2252 69.7913V90.0868L73.4753 81.8823C79.3566 78.5011 79.5121 79.1143 79.5207 74.9732V55.1095ZM77.7935 56.4049H78.2253L77.7935 56.8367V56.4049ZM3.08871 73.2459L16.4751 81.1913C17.6756 81.8995 22.3392 84.7064 23.3842 84.8704C25.1504 85.1468 30.7036 81.4591 32.4524 80.4141C33.3247 79.8959 34.7929 79.2007 35.229 78.2593C35.6306 77.387 35.4795 72.3736 35.4449 71.0868V68.9709C35.0995 67.0406 33.6097 66.8463 32.0206 67.5113C30.1292 68.3059 25.7722 71.4797 24.2479 71.6395C22.0801 71.8684 16.8853 67.4984 14.7478 67.1659C13.4265 66.9586 11.9799 67.982 10.8615 68.6168L3.08871 73.2459ZM113.634 73.2459C111.963 71.7259 107.969 69.5581 105.862 68.375C104.558 67.6409 103.534 66.8506 101.975 67.2306C99.514 67.8309 95.0403 71.6611 92.9071 71.605C91.1885 71.5575 86.6587 68.2497 84.7026 67.4465C83.1135 66.7945 81.6194 67.0881 81.2782 68.9709V71.0868C81.2437 72.4168 81.0969 76.9466 81.5071 77.9182C82.2455 79.6713 88.4249 82.7286 90.3162 83.7909C91.2662 84.322 92.1946 84.9654 93.339 84.8143C94.3883 84.6761 98.6072 82.0766 99.8162 81.3857L113.634 73.2459ZM3.08871 74.5413C2.35893 76.3766 2.65689 79.4166 2.65689 81.4504V94.8368C2.65689 95.6616 2.60507 97.0391 2.91598 97.7819C3.61553 99.4444 7.51918 101.21 9.13418 102.117L22.9524 109.951V89.655C22.9438 85.4361 22.3176 85.7859 16.9069 82.6811L3.08871 74.5413ZM114.066 74.5413L99.8162 82.7416C93.8442 86.248 93.7794 85.4707 93.7708 89.655V109.951L108.021 101.686C114.062 98.2957 114.058 98.8096 114.066 94.8368V74.5413ZM45.407 84.905C43.982 84.05 37.9581 80.3925 36.7706 80.1636C35.0347 79.8268 31.8479 82.1068 30.2933 82.9964C27.1626 84.7927 24.3213 85.3023 24.2479 89.2232V110.382L32.4524 105.814C33.5233 105.205 35.1383 104.553 35.6479 103.383C36.0754 102.398 35.8983 97.5228 35.907 96.1323C35.9502 89.6032 41.9827 91.0843 44.552 87.3318C44.9666 86.723 45.2041 85.6304 45.407 84.905ZM92.4753 110.382V89.655C92.4667 85.488 92.3328 86.2048 85.5662 82.3141C84.4435 81.6664 82.0296 80.1032 80.8162 80.0686C79.443 80.0341 76.8866 81.7225 75.6344 82.435C74.6541 82.992 72.4475 84.0586 71.9984 85.0734C71.3248 86.5848 72.318 87.7032 73.5012 88.4761C75.2587 89.6248 78.9982 91.3391 80.2505 92.7684C81.7964 94.5303 81.2048 98.978 81.248 101.314C81.2653 102.122 81.2394 103.028 81.6885 103.737C82.2369 104.596 84.206 105.598 85.1344 106.151L92.4753 110.382ZM79.0889 93.1096L71.748 88.7871C70.6037 88.1221 69.2434 87.1375 67.8616 87.3016C65.7327 87.552 60.3393 91.9048 58.3616 91.853C55.7145 91.7796 50.7832 86.8266 47.9979 87.388C46.6852 87.6514 39.2795 92.1207 37.6343 93.1096L52.3161 101.811L58.3616 104.851L64.4071 101.832L79.0889 93.1096ZM37.6343 94.405L37.2024 101.314V114.701L37.8933 118.418L43.6797 122.046L57.4979 129.814V109.519C57.4893 105.451 56.8157 105.559 51.4525 102.549L37.6343 94.405ZM79.5207 94.405L64.8389 102.86C59.1345 106.129 59.2339 105.693 59.2252 109.519V129.814L72.6116 122.352L78.8298 118.423L79.5207 114.701V94.405Z"
                />

                <path d="M139.112 74.1095C135.541 74.1095 128.433 74.442 125.294 73.6777C125.873 76.0484 125.873 77.3524 125.294 79.7231C128.489 78.9459 136.288 79.2913 139.976 79.2913H167.612C170.423 79.287 172.168 79.1531 174.482 77.3006C179.146 73.5654 178.844 67.1313 174.085 63.6551C171.697 61.9106 169.607 61.5997 166.749 61.5867H136.953C134.841 61.5824 132.397 61.5047 131.702 58.9958C130.692 55.334 136.02 55.1137 138.249 55.1094H174.09C178.291 55.1008 177.976 54.7899 177.976 49.9276H135.658C133.684 49.9319 132.264 49.8499 130.476 50.8905C124.253 54.5178 124.163 62.5238 130.476 66.1079C132.479 67.2436 133.883 67.196 136.089 67.2004H165.885C167.142 67.2004 168.623 67.1097 169.763 67.7056C171.952 68.8499 172.552 71.3415 170.536 73.004C169.111 74.1829 166.77 74.1052 165.021 74.1095H139.112ZM218.567 74.1095H179.271V79.2913H221.158L221.282 79.2911C223.628 79.2873 225.103 79.2849 227.203 77.9397C231.686 75.0681 232.921 69.1392 229.272 65.0585C226.646 62.1222 223.58 61.591 219.862 61.5867H190.499C189.428 61.5867 188.024 61.6688 187.07 61.1463C185.04 60.0365 184.838 57.3376 186.712 55.9774C188.037 55.0101 189.803 55.1137 191.362 55.1094H231.522V49.9276H189.203C187.23 49.9319 185.809 49.8499 184.021 50.8905C177.799 54.5178 177.708 62.5238 184.021 66.1079C186.025 67.2436 187.428 67.196 189.635 67.2004H219.862C226.279 67.2349 226.417 71.199 224.12 73.004C222.635 74.1743 220.363 74.1052 218.567 74.1095ZM240.158 49.9276H234.112V79.2913H240.158V49.9276ZM257.431 79.2913H294.567V62.0185H276.863L280.887 66.7599L288.953 67.2004V74.1095H260.453C254.559 74.1008 248.863 71.7863 248.406 65.0413C247.9 57.6528 254.788 55.1181 260.885 55.1094H294.567V49.9276H257.862C254.887 49.9319 253.687 50.1176 250.953 51.4346C236.919 58.1926 241.972 79.2179 257.431 79.2913Z" />
            </g>
        </svg>
    )
}
