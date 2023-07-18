/** @type {import('tailwindcss').Config} */
module.exports = {
  // Chọn tất cả các tệp tin có định dạng .html và .js trong thư mục public và tất cả các thư mục con của nó 
  // (Tailwind sẽ dựa vào các class được viết trong file html trong public để build ra các class tương ứng trong public/output.css)
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // Nơi ta định nghĩa thêm các mã màu khác
      colors: {
        'light-coffee': '#C89F94'
      }
    },
  },
  plugins: [],
}

