    // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon based on menu state
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Page Navigation
        const navLinksAll = document.querySelectorAll('.nav-link, .footer-nav-link');
        const pages = document.querySelectorAll('.page');

        function showPage(pageId) {
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            const activePage = document.getElementById(pageId);
            if (activePage) {
                activePage.classList.add('active');
            }
            
            // Update active nav link
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === pageId) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Trigger animations for the new page
            setTimeout(animateOnScroll, 100);
        }

        // Add click event to navigation links
        navLinksAll.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Scroll to top button visibility
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });

        // Scroll to top functionality
        document.querySelector('.scroll-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .course-card, .about-img, .contact-info, .contact-form, .process-step, .blog-card, .detail-img');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animated');
                }
            });
        };

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        window.addEventListener('load', animateOnScroll);

        // Image slider functionality
        const slides = document.querySelectorAll('.slide');
        let index = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            index++;
            if (index >= slides.length) index = 0;
        }

        // First slide active
        showSlide();

        // Change every 6 seconds
        setInterval(showSlide, 6000);

        // Blog data
        const blogData = {
            1: {
                title: "The Importance of Tajweed in Quran Recitation",
                image: "images/03.webp",
                content: `
                    <p>تلاوتِ قرآن مجید میں تجوید کی اہمیت ناقابلِ انکار ہے۔ تجوید دراصل قرآن پاک کو صحیح تلفظ اور درست طریقے سے پڑھنے کا فن ہے۔ یہ نہ صرف ہمارے لیے فرض ہے بلکہ قرآن کی عظمت کا تقاضا بھی ہے۔</p>
                    
                    <p>تجوید سیکھنے سے پہلے ہمیں یہ سمجھنا چاہیے کہ قرآن اللہ کا کلام ہے اور اسے اس طرح پڑھنا چاہیے جس طرح وہ نازل ہوا۔ ہر حرف کی ادائیگی، ہر حرکات و سکنات کا خیال رکھنا تجوید کا حصہ ہے۔</p>
                    
                    <h3>تجوید کیوں ضروری ہے؟</h3>
                    <p>تجوید قرآن پڑھنے میں درستگی لاتی ہے۔ غلط تلفظ سے معنی بدل سکتے ہیں، جس سے قرآن کا مفہوم متاثر ہوتا ہے۔ مثال کے طور پر 'ق' اور 'ک' کا فرق، یا 'ث'، 'س'، 'ص' کا صحیح ادا کرنا بہت ضروری ہے۔</p>
                    
                    <p>نبی کریم ﷺ نے فرمایا: "تم میں سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔" یہ حدیث قرآن کی تعلیم و تعلّم کی اہمیت کو ظاہر کرتی ہے۔</p>
                    
                    <h3>تجوید سیکھنے کے فوائد</h3>
                    <ul>
                        <li>قرآن کو صحیح طریقے سے پڑھنا</li>
                        <li>معانی میں تبدیلی سے بچنا</li>
                        <li>ثواب میں اضافہ</li>
                        <li>دل کی تسکین اور سکون</li>
                    </ul>
                    
                    <p>ہمیں چاہیے کہ تجوید سیکھنے کے لیے کوشش کریں اور اپنی تلاوت کو بہتر بنائیں۔ یہ ہمارے ایمان کو مضبوط کرنے کا ذریعہ ہے۔</p>
                `
            },
            2: {
                title: "Rah e Noor Quran Site",
                image: "images/logu.jpg",
                content: `
                    <h2>دنیا کی کامیابی اور اصل سکون</h2>
  <p>
    دنیا میں کامیابی کے ہزاروں راستے دکھائے جاتے ہیں۔ کوئی کہتا ہے ڈگری ہی سب کچھ ہے،
    کوئی سمجھتا ہے دولت ہی اصل سکون ہے، اور کوئی شہرت کے پیچھے بھاگتا ہے۔ 
    لیکن حقیقت یہ ہے کہ دل کو سکون صرف ایک ہی راستے سے ملتا ہے: قُرآن سے جُڑ کر۔
  </p>

  <h2>راہِ نور قُرآن سائٹ کا تعارف</h2>
  <p>
    اسی ضرورت کو پورا کرنے کے لیے قائم کیا گیا ہے <strong>”راہِ نور قُرآن سائٹ“</strong> — 
    ایک ایسا پلیٹ فارم جو آپ کو قُرآن کے قریب لاتا ہے اور زندگی کو روشنی سے بھر دیتا ہے۔
  </p>

  <h2>راہِ نور قُرآن سائٹ کیوں؟</h2>
  <p>
    قُرآن کو اصل تلفظ کے ساتھ سیکھنے کا موقع۔
    قُرآن اللّٰه کا کلام ہے، اور اسے ویسے پڑھنا جیسے یہ نازل ہوا ہر مسلمان کی خواہش ہے۔  
    ”راہِ نور قُرآن سائٹ“ آپ کو تجوید اور تلاوت ایسے آسان اور دلچسپ طریقے سے سکھاتا ہے 
    کہ قُرآن پڑھنا صرف فرض نہیں بلکہ محبت لگنے لگتا ہے۔
  </p>

  <h2>آج کے دور کی ضرورت</h2>
  <p>
    آج کے دور میں سب سے زیادہ ضرورت ہے کہ نوجوان نسل قُرآن سے جُڑے۔ 
    ”راہِ نور قُرآن سائٹ“ کا ماحول دوستانہ اور inspiring ہے، 
    تاکہ ہر طالب علم قُرآن کو آسانی سے سمجھ سکے اور اس پر عمل بھی کر سکے۔
  </p>

  <h2>آسانی سے اور بالکل مفت</h2>
  <p>
    جہاں بھی ہیں، جیسے بھی ہیں، صرف ایک کلک کے فاصلے پر آپ قُرآن سیکھ سکتے ہیں۔  
    سب سے خاص بات یہ ہے کہ یہ سب کچھ بالکل مفت ہے کیونکہ قُرآن سیکھنے کے لیے دروازہ 
    ہمیشہ سب کے لیے کھلا ہے۔
  </p>
  `
  },
            3: {
                title: "Memorizing the Quran: Tips for Success",
                image: "images/--.jpg",
                content: `
                    <p>قرآن مجید کو حفظ کرنا ہر مسلمان کی دلی خواہش ہوتی ہے۔ یہ ایک عظیم سعادت ہے جس کے بے شمار روحانی اور دنیاوی فوائد ہیں۔ لیکن حفظ کے سفر میں کامیابی کے لیے کچھ اہم باتوں کا خیال رکھنا ضروری ہے۔</p>
                    
                    <h3>حفظ قرآن کے لیے کارآمد تجاویز:</h3>
                    
                    <h4>1. خلوص نیت</h4>
                    <p>سب سے پہلے نیت کو درست کریں۔ صرف اور صرف اللہ کی رضا کے لیے قرآن حفظ کریں۔ دنیاوی فوائد کو مقصد نہ بنائیں۔</p>
                    
                    <h4>2. مستقل مزاجی</h4>
                    <p>حفظ کا سفر طویل ہوتا ہے۔ روزانہ تھوڑا تھوڑا وقت دیں لیکن مستقل مزاجی سے۔ ایک دن چھوڑنے سے دس دن کا نقصان ہوتا ہے۔</p>
                    
                    <h4>3. صحیح تلفظ</h4>
                    <p>کسی ماہر استاد کے زیر نگرانی حفظ کریں تاکہ تلفظ درست ہو۔ غلط تلفظ سے بچنے کے لیے تجوید کا خاص خیال رکھیں۔</p>
                    
                    <h4>4. دورہ کرنا</h4>
                    <p>نئے حصے یاد کرنے کے ساتھ ساتھ پرانے حصوں کا دورہ ضرور کریں۔ بغیر دورہ کے حفظ ضائع ہو جاتا ہے۔</p>
                    
                    <h4>5. وقت کا انتخاب</h4>
                    <p>صبح کے وقت ذہن تازہ ہوتا ہے، اس لیے صبح کی نماز کے بعد حفظ کے لیے بہترین وقت ہے۔</p>
                    
                    <h4>6. ترجمہ و تفسیر سمجھیں</h4>
                    <p>صرف الفاظ یاد کرنے کے بجائے معانی بھی سمجھیں۔ اس سے یاد کرنا آسان ہو جاتا ہے اور دل میں قرآن کی محبت بڑھتی ہے۔</p>
                    
                    <h4>7. دعا کریں</h4>
                    <p>اللہ سے مدد مانگیں۔ حفظ کی توفیق دینے کی دعا کریں۔ یہ کام اللہ کی مدد کے بغیر ممکن نہیں۔</p>
                    
                    <p>حافظ بننا آسان نہیں، لیکن ناممکن بھی نہیں۔ اللہ پر بھروسہ رکھیں، محنت کریں، اور استقامت سے کام لیں۔ ان شاء اللہ کامیابی ضرور ملے گی۔</p>
                    
                    <p>نبی کریم ﷺ نے فرمایا: "تم میں سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔" اس حدیث کی روشنی میں قرآن سیکھنا اور سکھانا ہمارا فرض ہے۔</p>
                `
            }
        };

        // Blog modal functionality
        const blogModal = document.querySelector('.blog-modal');
        const closeModal = document.querySelector('.close-modal');
        const readMoreBtns = document.querySelectorAll('.read-more-btn');

        // Open blog modal
        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const blogCard = btn.closest('.blog-card');
                const blogId = blogCard.getAttribute('data-blog');
                const blog = blogData[blogId];
                
                if (blog) {
                    document.querySelector('.modal-blog-img').style.backgroundImage = `url('${blog.image}')`;
                    document.querySelector('.modal-blog-title').textContent = blog.title;
                    document.querySelector('.modal-blog-date').textContent = blog.date;
                    document.querySelector('.modal-blog-author').textContent = blog.author;
                    document.querySelector('.modal-blog-text').innerHTML = blog.content;
                    
                    blogModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close blog modal
        closeModal.addEventListener('click', () => {
            blogModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) {
                blogModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });

        // Initialize animations on page load
        window.addEventListener('load', () => {
            animateOnScroll();
        });
