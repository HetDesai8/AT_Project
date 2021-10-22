import './Footer.css'
export default function Footer() {
    return (
        <div class="footer-basic">
            <footer>
                <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                Contact us:&nbsp;
                <p class="list-inline-item"><i class="fa fa-location-arrow"></i> DDIT,Nadiad </p>
                <p class="list-inline-item"><i class="fa fa-phone"></i>  +91-9999878398  </p>
                <p class="list-inline-item"><i class="fa fa fa-envelope"></i> info@example.com  </p>
                <p class="copyright">Real Estate Management System © 2021</p>
            </footer>
        </div>
    );
}