export class Api {
  constructor({ options }) {
    this.address = options.address;
    this.groupId = options.groupId;
    this.token = options.token;
    this.name = options.name;
    this.about = options.about;
  }

  getUserInfo() {
    return fetch(this.address, {
      headers: {
        authorization: this.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => console.log(err));
  }
}

const api = new Api({
  options: {
    address: "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
    groupId: `web_es_cohort_03`,
    token: `6bf7647c-45da-4c77-891f-7b53e2ffb971`,
  },
});

const card = new Api({
  options: {
    address: "https://around.nomoreparties.co/v1/web_es_cohort_03/cards",
    groupId: `web_es_cohort_03`,
    token: `6bf7647c-45da-4c77-891f-7b53e2ffb971`,
  },
});

export { api, card };
