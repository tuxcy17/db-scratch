class Action {
    state: boolean;
    name: string;
    fn: any;

    constructor(name: string, state: boolean = false, fn: any) {
        this.name = name;
        this.state = state;
        this.fn = fn;
    }

    public resetState () {
        this.state = false;
    }
}

const basicActions = [
  new Action("INSERT", false, function () {
      alert('INSERT');
  }),
  new Action("UPDATE", false, function () {
      alert('UPDATE');
  }),
  new Action("DELETE", false, function () {
      alert('DELETE');
  })
];

export {basicActions, Action}