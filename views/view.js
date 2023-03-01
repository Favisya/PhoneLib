export default class View {
    template = '';
    data = null;

    getTemplate() {
        return this.template;
    }

    setTemplate(template) {
        this.template = template;

        return this;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}
