// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    /**
     * GSAP Animations Setup
     */
    function initGSAPAnimations() {
        // Set initial states for elements to be animated
        gsap.set([
            '.gsap-hero-title',
            '.gsap-hero-subtitle', 
            '.gsap-mockup-before',
            '.gsap-mockup-after',
            '.gsap-hero-demo-section'
        ], { 
            opacity: 0, 
            y: 50 
        });

        // Hero section animations
        const heroTl = gsap.timeline({ delay: 0.5 });
        
        heroTl.to('.gsap-hero-title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        })
        .to('.gsap-hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .to('.gsap-hero-demo-section', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to('.gsap-mockup-before', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .to('.gsap-mockup-after', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");

        // Floating shapes animation
        gsap.to('.floating-shape', {
            rotation: 360,
            duration: 20,
            ease: "none",
            repeat: -1
        });

        // Section titles and subtitles scroll animations
        gsap.utils.toArray([
            '.gsap-section-title',
            '.gsap-about-title',
            '.gsap-features-title', 
            '.gsap-examples-title',
            '.gsap-faq-title'
        ]).forEach(title => {
            gsap.fromTo(title, {
                opacity: 0,
                y: 60,
                scale: 0.8
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Section subtitles
        gsap.utils.toArray([
            '.gsap-section-subtitle',
            '.gsap-about-subtitle',
            '.gsap-features-subtitle',
            '.gsap-examples-subtitle'
        ]).forEach(subtitle => {
            gsap.fromTo(subtitle, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subtitle,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // About section animations
        gsap.fromTo('.gsap-about-text', {
            opacity: 0,
            x: -60
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.gsap-about-text',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo('.gsap-about-visual', {
            opacity: 0,
            x: 60
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: '.gsap-about-visual',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // About stats staggered animation
        gsap.fromTo(['.gsap-stat-1', '.gsap-stat-2', '.gsap-stat-3'], {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.about-stats',
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Editor tool animation
        gsap.fromTo('.gsap-editor-tool', {
            opacity: 0,
            y: 80,
            scale: 0.9
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.gsap-editor-tool',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Input area animation
        gsap.fromTo('.gsap-input-area', {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.gsap-input-area',
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Output areas animation
        gsap.fromTo('.gsap-output-left', {
            opacity: 0,
            x: -60
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.gsap-output-left',
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo('.gsap-output-right', {
            opacity: 0,
            x: 60
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: '.gsap-output-right',
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Feature cards staggered animation
        gsap.fromTo(['.gsap-feature-1', '.gsap-feature-2', '.gsap-feature-3', '.gsap-feature-4'], {
            opacity: 0,
            y: 80,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.features-grid',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Example cards animation
        gsap.fromTo(['.gsap-example-1', '.gsap-example-2'], {
            opacity: 0,
            y: 60
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.example-cards-container',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // FAQ items staggered animation
        gsap.fromTo(['.gsap-faq-1', '.gsap-faq-2', '.gsap-faq-3'], {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.faq-accordion',
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Footer animation
        gsap.fromTo('.gsap-footer', {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.gsap-footer',
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        // Parallax effect for floating shapes
        gsap.utils.toArray('.floating-shape').forEach((shape, i) => {
            gsap.to(shape, {
                y: -100 * (i + 1),
                ease: "none",
                scrollTrigger: {
                    trigger: shape,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }

    /**
     * Mobile Navigation Toggle
     */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navToggle && navMenu) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navToggle && navMenu && navMenu.classList.contains('active')) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    /**
     * Sticky Header with Blurred Background on Scroll
     */
    const header = document.querySelector('.header');
    
    ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        toggleClass: {
            className: "scrolled",
            targets: ".header"
        }
    });

    /**
     * Mock Prompt Editor Functionality with Enhanced Animations
     */
    const improveBtn = document.getElementById('improve-btn');
    const promptInput = document.getElementById('prompt-input');
    const originalOutput = document.querySelector('#original-output pre');
    const improvedOutput = document.querySelector('#improved-output pre');
    const copyBtn = document.getElementById('copy-btn');

    improveBtn.addEventListener('click', () => {
        const originalText = promptInput.value;
        if (originalText.trim() === '') {
            // Shake animation for empty input
            gsap.to(promptInput, {
                x: -10,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "power2.inOut"
            });
            originalOutput.textContent = 'Please enter a prompt first.';
            improvedOutput.textContent = '';
            return;
        }

        // Button loading animation
        gsap.to(improveBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // Display original prompt with typing effect
        originalOutput.textContent = '';
        gsap.to({}, {
            duration: 1,
            onUpdate: function() {
                const progress = this.progress();
                const currentLength = Math.floor(progress * originalText.length);
                originalOutput.textContent = originalText.substring(0, currentLength);
            }
        });

        // Simulate AI improvement with delayed animation
        setTimeout(() => {
            const improvedText = `As an expert in prompt engineering, rewrite the following user request to be more detailed, specific, and structured for an AI model. Add context, constraints, and a clear desired output format.

Original Prompt: "${originalText}"

Rewritten Prompt: Create a detailed, actionable plan based on the user's request for "${originalText}". Include specific steps, define the target audience, outline the desired tone of voice (e.g., ${document.getElementById('prompt-style').value}), and specify the final output format (e.g., a list, a table, or a paragraph).`;

            improvedOutput.textContent = '';
            gsap.to({}, {
                duration: 2,
                delay: 0.5,
                onUpdate: function() {
                    const progress = this.progress();
                    const currentLength = Math.floor(progress * improvedText.length);
                    improvedOutput.textContent = improvedText.substring(0, currentLength);
                }
            });

            // Animate the improved output card
            gsap.fromTo('#improved-output', {
                scale: 1,
                boxShadow: "0 0 0 rgba(148, 126, 167, 0)"
            }, {
                scale: 1.02,
                boxShadow: "0 0 30px rgba(148, 126, 167, 0.3)",
                duration: 0.5,
                delay: 0.5,
                yoyo: true,
                repeat: 1
            });
        }, 1000);
    });

    // Enhanced Copy to Clipboard functionality
    copyBtn.addEventListener('click', () => {
        const textToCopy = improvedOutput.textContent;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Success animation
                gsap.to(copyBtn, {
                    scale: 1.2,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.out"
                });
                
                copyBtn.title = 'Copied!';
                setTimeout(() => {
                    copyBtn.title = 'Copy to Clipboard';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Error shake animation
                gsap.to(copyBtn, {
                    x: -5,
                    duration: 0.1,
                    repeat: 3,
                    yoyo: true
                });
            });
        }
    });

    /**
     * Enhanced FAQ Accordion with GSAP animations
     */
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            
            if (question && answer && icon) {
                question.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isActive = item.classList.contains('active');
                    
                    // Close other open items with animation
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            const otherIcon = otherItem.querySelector('.faq-icon');
                            
                            if (otherAnswer && otherIcon) {
                                gsap.to(otherAnswer, {
                                    height: 0,
                                    duration: 0.3,
                                    ease: "power2.inOut"
                                });
                                gsap.to(otherIcon, {
                                    rotation: 0,
                                    duration: 0.3,
                                    ease: "power2.inOut"
                                });
                            }
                        }
                    });
                    
                    // Toggle the clicked item with animation
                    if (isActive) {
                        item.classList.remove('active');
                        gsap.to(answer, {
                            height: 0,
                            duration: 0.3,
                            ease: "power2.inOut"
                        });
                        gsap.to(icon, {
                            rotation: 0,
                            duration: 0.3,
                            ease: "power2.inOut"
                        });
                    } else {
                        item.classList.add('active');
                        
                        // Measure the natural height
                        gsap.set(answer, { height: "auto" });
                        const autoHeight = answer.offsetHeight;
                        gsap.set(answer, { height: 0 });
                        
                        // Animate to the measured height
                        gsap.to(answer, {
                            height: autoHeight,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                        gsap.to(icon, {
                            rotation: 45,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            }
        });
    }

    // Initialize all GSAP animations
    initGSAPAnimations();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});