let state = {
  aboutMe: {
    title: "Despre mine",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,voluptas doloremque? Maxime totam possimus minima excepturi quos doloremque quidem iure quaerat aliquid, accusantium dolorem odio eum! Quia ullam iste quae quaerat adipisci et, dolore voluptas porro unde labore, cumque ea quo, deserunt laboriosam praesentium aliquam qui voluptatibus mollitia",
  },
  cv: {
    title: "CV",
    content: "Continut CV",
  },
  projects: {
    title: "",
    content: "",
  },
  contact: {
    title: "",
    content: "",
  },
};

let draw = (tab) => {
  let row = document.querySelector(".row.p-3");
  row.innerHTML = `<${tab}><${tab}/>`;
};

class MyCV extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <div class="col-12 d-flex flex-column align-items-center p-3">
    <img
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHZK4ypw9j1Ww/profile-displayphoto-shrink_800_800/0/1659557711287?e=1665619200&v=beta&t=GvZCZXKoTqRZJSoGgCXTg5w8rxPry_Prl4-d0tzLQrM"
      alt=""
      class="profile-pic"
    />
    <div class="h2 name">Adelin Farcas</div>
    <div class="location fw-light">Cluj-Napoca, Romania</div>
  </div>
    <div class="col-12 p-3 content">
    <div class="title fs-2 fw-light mb-3 bg-transparent">CV</div>
    <div class="content fs-6 fw-light lh-lg">
      <div class="container p-0 bg-transparent">
        <div class="col-md">
          <div class="bg-transparent d-flex flex-column gap-3">
              <!-- Experience -->
            <div
              class="experience d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Experience</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C560BAQHGQ38fS7XP3w/company-logo_100_100/0/1641197823411?e=1668038400&v=beta&t=DQlgR85S3vhjdKlntheKT3UWq5p1JT2gSnhQSBjy7Og"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>Front-end web development trainee</div>
                    <div>Scoala Informala de IT</div>
                    <div>Feb 2022 - Jun 2022</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C510BAQGpRhkpxp5A9A/company-logo_100_100/0/1561962168715?e=1668038400&v=beta&t=OKXJE6NszKUzSvkD-bUNgj4tXSyAGmUnKBCwYFBmDNw"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>Junior Auditor</div>
                    <div>EY, Full-time</div>
                    <div>Sep 2021 - Apr 2022, 8 months</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Education -->
            <div
              class="Education d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Education</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQHhWslYddaNZQ/company-logo_100_100/0/1519901095295?e=1668038400&v=beta&t=UTS-5GpTYgRSKESFRkB3Qcza0ApU9ZueAE_b_fU6UVs"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>
                      Universitatea „Babeș-Bolyai” din Cluj-Napoca
                    </div>
                    <div>
                      Master's degree, Accounting Management, Audit and
                      Control
                    </div>
                    <div>2019 - 2021</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                  <div class="cv-img">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E0BAQHhWslYddaNZQ/company-logo_100_100/0/1519901095295?e=1668038400&v=beta&t=UTS-5GpTYgRSKESFRkB3Qcza0ApU9ZueAE_b_fU6UVs"
                      alt=""
                      class="employee-img rounded"
                    />
                  </div>
                  <div
                    class="cv-details d-flex flex-column justify-content-center gap-0"
                  >
                    <div>
                      Universitatea „Babeș-Bolyai” din Cluj-Napoca
                    </div>
                    <div>Bachelor's degree, Accounting</div>
                    <div>2016 - 2019</div>
                    <div>Cluj-Napoca</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Languages -->
            <div
              class="languages d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
            >
              <div class="cv-title">Languages</div>
              <div class="entry-0">
                <div class="cv-content fs-6 d-flex flex-row gap-3">
                    <div>
                      English
                    </div>
              </div>
              <div class="separator gap-0"></div>
              <div class="entry-1">
                  <div class="cv-content fs-6 d-flex flex-row gap-3">
                      <div>
                        Romanian
                      </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Skills -->
          <div
          class="Skills d-flex flex-column fs-3 fw-light bg-light bg-gradient border rounded p-3 gap-3"
        >
          <div class="cv-title">Skills</div>
          <div class="entry-0">
              <div class="cv-content fs-6 d-flex flex-row gap-3">
                <div class="cv-img">
                  <i class="bi bi-filetype-html fs-1"></i>
                </div>
                <div
                  class="cv-details d-flex flex-column justify-content-center gap-0"
                >
                  <div>HTML</div>
                </div>
              </div>
            </div>
            <div class="separator gap-0"></div>
            <div class="entry-1">
              <div class="cv-content fs-6 d-flex flex-row gap-3">
                <div class="cv-img">
                  <i class="bi bi-filetype-js fs-1"></i>
                </div>
                <div
                  class="cv-details d-flex flex-column justify-content-center gap-0"
                >
                  <div>JavaScript</div>
                </div>
              </div>
            </div>
            <div class="separator gap-0"></div>
            <div class="entry-2">
              <div class="cv-content fs-6 d-flex flex-row gap-3">
                <div class="cv-img">
                  <i class="bi bi-filetype-css fs-1"></i>
                </div>
                <div
                  class="cv-details d-flex flex-column justify-content-center gap-0"
                >
                  <div>CSS</div>
                </div>
              </div>
            </div>
            <div class="separator gap-0"></div>
          <div class="entry-3">
            <div class="cv-content fs-6 d-flex flex-row gap-3">
              <div class="cv-img">
                  <i class="bi bi-github fs-1"></i>
                  
              </div>
              <div
                class="cv-details d-flex flex-column justify-content-center gap-0"
              >
                <div>Github</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  }
}

customElements.define("my-cv", MyCV);
