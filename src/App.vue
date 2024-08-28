<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
body {
  font-family: "Inter";
}
.h1-heading {
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  /* letter-spacing: -10px; */
  color: #16161d;
}
.h2-heading {
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: #16161d;
}
.bold-heading {
  font-weight: 700;
}

.h3-heading {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #6e6e91;
}

.h4-heading {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #a8a8bd;
}

.h5-heading {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.percent {
  color: #42bd53;
}
.h6-heading {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #1c1c21;
}
/* .container-fluid {
  max-width: 1920px;
} */
.dashboard {
  width: 100%;
}

@media (max-width: 399px) {
  .h1-heading {
    font-size: 24px;
    line-height: 24px;
  }
  .h2-heading {
    font-size: 16px;
    line-height: 21px;
  }

  .h3-heading {
    font-size: 14px;
    line-height: 18px;
  }

  .h4-heading {
    font-size: 12px;
    line-height: 18px;
  }

  .h5-heading {
    font-size: 12px;
    line-height: 18px;
  }

  .h6-heading {
    font-size: 10px;
    line-height: 17px;
  }
}

@media (min-width: 400px) {
  .h1-heading {
    font-size: 26px;
    line-height: 26px;
  }
  .h2-heading {
    font-size: 18px;
    line-height: 23px;
  }

  .h3-heading {
    font-size: 16px;
    line-height: 20px;
  }

  .h4-heading {
    font-size: 14px;
    line-height: 20px;
  }

  .h5-heading {
    font-size: 12px;
    line-height: 18px;
  }

  .h6-heading {
    font-size: 12px;
    line-height: 17px;
  }
}

@media (min-width: 576px) {
  .h1-heading {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    /* letter-spacing: -10px; */
    color: #16161d;
  }
  .h2-heading {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #16161d;
  }
  .bold-heading {
    font-weight: 700;
  }

  .h3-heading {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: #6e6e91;
  }

  .h4-heading {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #a8a8bd;
  }

  .h5-heading {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .percent {
    color: #42bd53;
  }
  .h6-heading {
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    color: #1c1c21;
  }
}

@media (min-width: 1400px) and (max-width: 1499px) {
}
@media (min-width: 992px) and (max-width: 1230px) {
  .h1-heading {
    font-size: 30px;
    line-height: 30px;
  }
  .h2-heading {
    font-size: 22px;
    line-height: 27px;
  }

  .h3-heading {
    font-size: 18px;
    line-height: 22px;
  }

  .h4-heading {
    font-size: 14px;
    line-height: 20px;
  }

  .h5-heading {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .h6-heading {
    font-size: 10px;
    line-height: 15px;
  }
  .patient-status {
    max-width: 12%;
  }
}
@media (min-width: 1500px) {
  .h1-heading {
    font-size: 38px;
    line-height: 38px;
  }
  .h2-heading {
    font-size: 30px;
    line-height: 35px;
  }

  .h3-heading {
    font-size: 26px;
    line-height: 30px;
  }

  .h4-heading {
    font-size: 22px;
    line-height: 28px;
  }

  .h5-heading {
    font-size: 20px;
    line-height: 26px;
  }

  .h6-heading {
    font-size: 18px;
    line-height: 23px;
  }
}

@media (min-width: 1920px) {
  .h1-heading {
    font-size: 42px;
    line-height: 42px;
  }
  .h2-heading {
    font-size: 34px;
    line-height: 29px;
  }

  .h3-heading {
    font-size: 30px;
    line-height: 34px;
  }

  .h4-heading {
    font-size: 26px;
    line-height: 32px;
  }

  .h5-heading {
    font-size: 24px;
    line-height: 30px;
  }

  .h6-heading {
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
