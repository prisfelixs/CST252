document.addEventListener("DOMContentLoaded", () => {
        let btn1 = document.querySelector('#btn1');
            let handler1 = () => {
              console.log('you clicked!');
              btn1.style.backgroundColor = 'pink';
              btn1.style.color = 'white';
          };

          btn1.addEventListener('click', handler1);

          let btn2 = document.querySelector('#btn2');
              let handler2 = () => {
                console.log('you clicked!');
                btn2.style.backgroundColor = 'blue';
                btn2.style.color = 'white';
            };

            btn2.addEventListener('click', handler2);

      });
