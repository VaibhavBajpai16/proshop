const product = [
  {
    name: "Airpods wireless bluetooth headphones",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeFi_6t244ZxhALDI77ZA64Arhdu9MdWAXQ&usqp=CAU",
    description:
      "bluetooth technology lets you connect it with compatible devices wirelessly ",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 18,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Iphone 13 Pro",
    image:
      "data:image/jpeg;base64,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",
    description: "Get a new IPhone 13 pro with best battery ever  ",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 10,
    rating: 5,
    numReviews: 35,
  },
  {
    name: "DSLR Camera",
    image:
      "data:image/jpeg;base64,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",
    description: "See yourself in best of your clicks ",
    brand: "Kotak",
    category: "Electronics",
    price: 929.0,
    countInStock: 11,
    rating: 3.5,
    numReviews: 21,
  },
  {
    name: "Alexa",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgYGBgYGRgYGBgYGBgZGRgZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhESGjQjISE0NDQ0NDQ0MTQ0MTE0NDQ0NDQ0NDQ0PzE0NDE0NDQ0NDQxNDY0MTE0NDE0NjQ0PzE0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA8EAACAQICBwQIBQMEAwAAAAAAAQIDEQQhBRIxQVFhcQaBkfATIjJCobHB4QdicpLRFFKyQ4Ki8SMkM//EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACkRAQEAAgEEAgAGAgMAAAAAAAABAhEDEiExQQRRFCIyYXGBE7EjM1P/2gAMAwEAAhEDEQA/APMmhojtg3ALMSRFaEiXWAJ4jQp600BGdifBZzSFlex4zdeo9mHamlyNetGMlZpHNaMxWpBLkWpY9nK609bRNF7YorvQ9Fe6gHimxOo2HcaiSOBpR91EihBbIorqQ6YGtwr22BemZUUw4yGSxrsNSK8Q4gSeMg0yFMJTALEWFqlaMyRVANNGKJFIgUg0ATqYcKhXSJIoJRZKuRncIqwlYnjIvjlvy5s8Nd4MdEdx7lE0lxrg3GuMCuM2A2JsAe4zYLYzYgK4iPWEAfPGsNrEOsHTpuQjSxkWoRtmxoU1DN7QZzuMhSkbOhsJ7zM3R+Fc5X3HV4WmkkkRzy9L8ePutChsLMWV6aJ0SWGmEmApDqYjSIOJBOsoq8mkuZh4/tNCOUPWfHcOS3wzbJ5dLrJFetpKnD2ppd5wWK0zWntk0uCyKMm3tbZScd9p5cs9O8rdqaMdjb6FKp2wXuwfecioDqBuccTvJXTS7Xz3QQo9r6n9iOcVMJQH0Y/RdeX26ml2wlvgjQodr4P2oNdDiEh4h0Y/R/5L9vScN2ioT963U1qOLhP2ZJ955NTky5hsTKOyTXeK8U9HOa+3qkZEkTiNHafnHKT1lzOmwWl4T/K+ZPLjyimPLjWpEliiGJLFGIpUgrjwQ8oF8MvVc+eHuBuK4DY1yiQnIFsFsFsAJyBchnIFyAC1hEesIA+fKVK5cjNRVkUlNhKaDY0sSncs4LBym+RQhUSd3ma9DTMIq2qYyt9KYye27hsOoKyNCjY52jp2nvuaeG0tRlskiFmX06JcfVa8agSmynDGwvZTXiS1MVCK1pSSRnufZZiU9J6UhRWbvJ7Ir6lPSmm4QheD1pS9n+TkpTlOTlJ3b3lceP3klly67RbxukalZ+s8tyWwrRgHCBJGDLSaRttBGAcYEsIFiWDmouTVle3V8hsqqiOohbO8KwBHqhJcQ9UJRAFRhrSSuld79iL+P0cqbS14zur+ru6lGMLEsIsYRxp527yeMA4xJIoAVM0MPUaKSRNTkMOo0bpKUbJ5rgdLha8Zq8X9jgcNM3MDiXF3i/uYywlax5Lj2vh1sCaKKWDxCnG671wL0GQ1ZdVfcs3EVWjvRTlkayRBicNfNFMck8sd94znIByFNNOzI2zaQnIFsFyBcgA9YRHrCA3gVChKbskb2A0QlnJXNHDYKMFki5GKIZZ78OjHjk8qscBD+xEsdGwfuItxJET6qp0xRehaL2wRBV7M037LcWa6JIhM7BcJfTh8XoatCT1U5Lc1tIcLTnOWrNyUILWnfcl/J6CrHL9o8QtT1VbXnbLfGH3OrgvVldztJtz82Mxnb2xJ1HOetu3LgtyLVKBVw0TRpxN27u6keMQ1EdINIRoUmt11yLMsXJ2V3ZKySTtboChwAbXCsISAEkFFDDoAJIOKBRJFABRRNCIKViSEZPZbwbGR1EKCA12tqy4rZ38CeKAJ6BrYSRlUkamFHGa2cHVcJJ7nt/k6WhO6v49TloxvE2NHYn2L+/eH++OzxSfgLPHqm/prjy1dfbaiEkBEkRzuhWxWFU1zMStBxdmdMiDFYVTXM3MmcsdubbAbJsVQlB2fiVnI1tLR9Yci1hAHCRiSwiVlUYcZs5XctoJMrxkw7sVgThxZWUh1NiaPpDEalOc+EXbruOW7Qq3oY8IPxyNXtFWfoWuMkvqZ3aKN6dGotlrfuimvkzv+Jj/xcn9OL5N/Piz8MaEGZeHmaFOQmFhBIjiwkxAdxDXFlv7/AKgDi11xJcNS15qOSu7ckXf6SM84XV02uF4q8k+Gy/ehhnINICULZrldbmm7eOZNFADxRLBAxRJFADp5577W8LW+Bdo1FGLt7Usr8I7+97Olysop5MKNHg2ukmBJZNJXls+fJcW+A2Gg1GKe1JX8B4U0nfa+Lbb7m9hYhAYHRSew08NEpYTCxjfVio6zcpWSV5Pa3bazUw0AhVfp7AqtXUw85/2VIzXdKN/g2RynZEWlJ6uCm377S/dOK+SKY+/4Y9x2NKesk1saT8SeKMrQFbXw1KX5I/DL6GnFnF7d3mJUGiOJJFDhVDisLGcbNHLY/CSpvPZuZ2UUR4nCxnFxkjc7MZSVwmsMbNXs/K7s8twh7Y6a8yVND6hMlyHscm3foCgDYlyBlIe+w0j1uQtdhASpmT0yu0cr01+pfJj6PisRhHT96GS6r1ovpu7mLTlO9J8mmY2hMf6Kpn7Esp8lul3fVnofB5JjfzeL2v8AFcHysbfHnzFODadnk07NcGtqNChM0O0ei/8AXhmvfS+Ely4+PEwqNQpz8V4srL/V+4lx5zLHcbEZBoqUahagyDaRD2uKKDUQAYTa23y2SX1W2/Qtf10mnFuTvb3ZJ5c7b77yvQcnFOUdV71e9u8mihjQFFvdZbbb3bZfgr5ksUJIkjEASiSRiPGIcYAR4IlihQgTwgMGhAtUqY0IFiKGSWlAuU8imppEdbFbltHGa0LuclCO9+C3vwKfbfFqMadCL/O0tqS9WG+/F9xp4KEaFOVWq7O13yW6C/M3bvsefaRx8qtWVSXvO6XCKyikrtO3FFsp0Y6vmsY/my36j1Tso/8A1aX6X/kzcgzK0JT1KFKO9Qj8rmpTPN33r0ZNYxPBFiJDTJ4G4nkNIIUQikTptUQVhBotvDFcawTkwWjhejorpEcpoeS5jKPIY0DXYrkigOqYCqeMp68JR4xfyOKazPQlSucPpOhqVJx4Sfg8zo4r5jm554rU0FpfVSpTfq7IyexflfLg93QPSfZ+SvOirrbKC2r9PFcvDgc2zoNAdoJUWoTTlDYn70F9Vy8OB6WHNM8Zx8vieL7jzuXDLHefH5+vtkU6ti/RrHc19CYTHQ9JCSUn/qQtm7bJx3vrZ8zktKdmcTh7vU14L36d5K35ltXercyPJw3HvO8+0+H5vHyXpy7ZfVPTmixFmFRxPMuUsWRdrWigoxKdPFIsQxCAaWYxDjAihWRLGqhbGksYksIkCrof+qQxpcgiSLM6WNRDPSHMZNr0yQEsUjCeObdldt7Es2+iRqYDQ1apZz9SPP230ju7/Aphx55XUm08s8cfNH/VOTUYq7exI3NHYONKLq1pJaqu236sF148/AhrVMNg4et7TV1FetUnblw5uyRx2mdPzrtNvUgn6kIu8U1e0rrNztvatwRezHh897/pibz/AGi/2h7R/wBRJRheNOLdrv2tq1nZ5Sy2PYnzZm6JoupUhDjOK3ZXav8A9oy4VP3f8muL3SOo7E4dyxEZPNRTl32tl4nLnnbu1fDHvJHq9NWsl0LNNlKi2W6Jxx11cpsswRWpluDLRLJJFDjxEUSphCuIDeHMBxLnoB1TXA896KpGkSRostKIhhAqSHUCRyBuOM0tVHIdrcNacZpZSVn1X2OwsZHaLDa9J8U7rqi2Hao8k3HCMYeQzOhyrOCx9SjLWpzcXldrfbc47Jd9zt9Ddv7WWIjbZ60Ltd8Xmu5voefiTKY8mWPiubm+Nxc0/PP79vZHhNG45X1YSk83KD1Ki/UlaX7kYuO/DuO3D4h/pqxT/wCcbf4nnEKjTTTaa2O+a6PcbWC7VYqna1aUl/bO01luvLP4mrnjl+qOP8J8ji/6eXt9Vp4jsZjobKcZrjCcX8JWZn1dF4uHtYesukJNeKTRuYL8R6sfbpQlntjKUMuOakbWH/Emjlr0ai46urK3xQunC+znN83H9WEv8OCc6kfahNdYSXzQ8cVLg/BnpEfxCwjSzqK99sOG3Y2Ou32EXvy2X/8AnL+B/wCPD7H435H/AI157T9LL2adSX6YSl8kXKOicZL2cPV/3Rcf8rHaVfxDwyWXpJZXyglfpeSM3FfiJDPUozb/ADSjDLjlrZC6cZ7H4n5WX6ePX8s/DdkMZK2vqU1v1p6z8I3XxNfDdiYRzqVZTfCK1I/V/FGJiO31eXswhBXzylNtfld0vgYGN7QYmr7dabWatfUjK+ecY2V7cTeOXHj31s8cPl5/qykn7O/rYrBYS6ThGWScYevPPYpNXa/3NIwNJdsZyTjRj6NWd5StKon+n2UvHrkcc6vDkult0lvQo1Nm3lns/S+95czWfycrNTtP2dXHwTHve9+6tVa0ptyk23JttuTetzU3ne0djAU3vze978tia3rzyIE+nhl3r68iWK8OPys1sOba6elHpa/VeO49I7B4NqE6jXtvVT5La/E4DAUZTnGEVdyaS4523o9i0bhVTpwhHZGKXV734kuS9tLcU77aFNW2suwmUqcS5BolFqt0yzBFWkXIFYlkliOJDooma4hWEAePOI2RJYSgjz3ooZSY2qyaUO4YAjUB1AdtiSNxmmaKGlY3gzScStjoXhLoUxSyea4mFpMrmljqebM6SsXxu3NlNUwhCNMnQkMICOh4vz9RrCsMCUuPXv4iT/nzyG8+f4EvPn6AQ0+i+n2Hcl4fC4K8+d4vP/TAD1vPPkN55d/Bi8/PbwE/Pz7wB0/O/wC6HivO77Ded/lBRXn7oDHBfDf90SwXx87UDFcPPejd7PaJ9JNTn7Cf7uWRm2Sbp4y26jo+w+iNX/zzWbygnw3yO+g8kZ+BgkkllZbEa0IZELeru6cZMZooRZapoCEOJPCIpDtWaJZgyvTiTxZuVOxPFh3IYsPW5lJWLB5iB1xD2zp5NZDOXAVh1E4HpI3cXoySQDkBHUAWgdoUkahU0kQVFe6Jn3v5ASZTGp5RxGlaFpsx6tM7DTOHvn8jn6tApjklljtjyiNcuVKDK86RSZIXHSIcTiJGiOJDCAjjxGQ9wB/PmwT8+d4KHAFfz52BefKGXnaFFADrz52oOCv5zJKOFlLdbqbOA0eur4mcspGscbUejNGubTksuG99TvNFYWySS8DO0dhEdLhKdsvkQyy6q6McZjOzSwFA14xKmDp5F9QHBTRiSQYOqHEDTQJouxBFkkRys2JoyDuRQYSkalZsSXEBrCNbZ08tcl1BbYgThegZyI2+ocmyNIYO5DLoPHoKzYyC+YE1zuTOGY2r0NSsWKGIgmrMw8Rh7bsjpqqM3E07+frvNbY052pTKs6Rr1aNitOibmTGWLKnQIpYc1nRI3QfnYbmSdwZLw43oZGq6IPozXUz0RmOlLgN6KXBmqqXIJUQ6i6GUqEuBLDCSNNUiWFFiuR9EZscEt7LtDCrci7SwxfoYUzcq1MZFXDYU28JhfP2Hw2GsauGoE7VJE2GppWNfCwbeyxUoRS2K7NrBUXkzJ6XaNOxYBigtU2WjJEiADigNJEkRHewSYbKpExawMRm+BokusORawh7LTzFu7GaEI43YF/EFQbEIYPqLrzDeW0QhkHW3EcoiEEI0o3IKlG+1+A4jcZqjVwy4FWeGEIYqtKiiGcRCNRio/Rj+hQhGoxTxgFGiIQElhQLEMOIQjXKVDgXaNHixhCC7h6fBJczToUeIwjLTWweH7kbFGlx2edwhBDqwkM0IRoiSCQhASSI9xCGA1JqMW3kknfuV3sPOdO/ifBa0MJTc5LL0lT1Y9VDa++whFMJLUs7Z4cNV7U4+TcniameeTUV3JLIQhFtRz9Vf//Z",
    description:
      "Now listen to your favourite songs with Alexa which is perfectly designed as well as having voice support  ",
    brand: "Amazon",
    category: "Electronics",
    price: 35.0,
    countInStock: 19,
    rating: 2.5,
    numReviews: 22,
  },
  {
    name: "Logitech G Series Gaming Mouse",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Get a better handle on your games with new G-Series Gaming mouse ",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 6,
    rating: 4.0,
    numReviews: 15,
  },

  {
    name: "Playstation ",
    image:
      "data:image/jpeg;base64,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",
    description: "Get best noise cancellation along with bass 5.0 ",
    brand: "Oneplus",
    category: "Electronics",
    price: 399.99,
    countInStock: 18,
    rating: 3.0,
    numReviews: 33,
  },
];

export default product;
