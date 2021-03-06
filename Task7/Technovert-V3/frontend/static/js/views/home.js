import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHTML(){
        return `
        <div class="home" id="home-content">
            <div class="border mt-4 p-3 pt-1 col-xl-8 m-auto ms-xl-5">
                <span class="roboto fw-normal">NEWS</span>
                <ul class="dashed open-sans small ms-3">
                    <li class="small">Technovert is Microsoft partner in Information Security Solutions</li>
                    <li class="small">We deliver one of the largest book information stores in the world</li>
                    <li class="small">Our team delivered the First Windows 8 Metro Style application for Windows Phone group at Microsoft</li>
                    <li class="small">Technovert partners with the strategic technology CTO group</li>
                </ul>
            </div>
            <div class="mt-3 m-auto ms-xl-5 small col-10">
                <h3>Welcome!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices a arcu quis luctus. Donec et libero iaculis turpis finibus consequat et sed ipsum. Mauris maximus quam vitae nulla fringilla bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sollicitudin mauris, sed pretium diam. Vivamus sodales pulvinar lacinia. Etiam et orci vitae diam auctor pellentesque consequat ut dui. Suspendisse sagittis leo nec erat sodales venenatis. Aliquam sit amet velit accumsan, pellentesque purus commodo, volutpat massa. Proin justo sem, efficitur ac pretium vitae, lobortis et tellus. Proin placerat varius lectus, ac sagittis lorem varius quis. Sed placerat odio magna, nec pellentesque mi iaculis sit amet. Maecenas sed tincidunt turpis. Etiam feugiat nibh vitae nulla accumsan, nec porta lorem bibendum.</p>
                <p>In tellus arcu, rutrum sit amet est vitae, consequat hendrerit lectus. Ut molestie felis lacus, id fermentum nisi molestie ac. Duis leo ex, finibus at suscipit varius, porta vel neque. Nulla facilisi. Etiam eu dui ut tortor bibendum sagittis sit amet a lorem. Nunc lacinia odio posuere maximus pretium. Cras at elementum libero, posuere malesuada eros. Mauris fermentum risus ex. Vivamus viverra vehicula elit, eget mattis augue congue vitae. Nullam faucibus efficitur purus a vestibulum. Proin suscipit varius tincidunt.</p>
                <p>Quisque quis malesuada quam. Aliquam laoreet feugiat est. Maecenas consectetur mauris tellus, vitae pulvinar quam facilisis in. Sed efficitur felis eu turpis volutpat, a fringilla nisi congue. Etiam vitae ante in nulla commodo convallis. Nam sagittis ligula erat, sed aliquam turpis vulputate et. Duis pretium risus eget nibh volutpat, non sagittis dui ullamcorper. Nunc rhoncus eleifend arcu, id ultricies lorem viverra nec. Donec velit risus, scelerisque id pretium sollicitudin, volutpat id nisl. In scelerisque sem a cursus tempus. Fusce at diam nisi.</p>
            </div>
        </div>
        `;
    }
}