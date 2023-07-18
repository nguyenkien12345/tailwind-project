/** @type {import('tailwindcss').Config} */
module.exports = {
  // Chọn tất cả các tệp tin có định dạng .html và .js trong thư mục public và tất cả các thư mục con của nó 
  // (Tailwind sẽ dựa vào các class được viết trong file html trong public để build ra các class tương ứng trong public/output.css)
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // Nơi ta định nghĩa thêm các mã màu khác
      colors: {
        // 'light-coffee': '#C89F94'
        // Ta sẽ dùng theo kiểu coffee-50, coffee-200, coffee-300, ...
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        }
      },
      // Nơi ta định nghĩa các keyFrames của animation
      keyframes: {
        fadeIn: {
          from: { opacity: 0, visibility: 'hidden' },
          to: { opacity: 1, visibility: 'visible' }
        }
      },
      // Nơi ta định nghĩa các animation
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      // Nơi ta định nghĩa background
      // ta thêm ct (custom) để biết đây là class ta tự định nghĩa
      backgroundImage: {
        // Dù file tailwind.config.js đứng ngoài cùng thì lẻ ra ta phải truy cập vào folder public rùi mới đến images nhưng 
        // do cái ảnh này được gọi từ file index.html trong folder public nên nó là đồng cấp ngang hàng 
        'ct-slider-background': 'url("./images/blackpink.jpg")'
      }
    },
  },
  plugins: [],
}

