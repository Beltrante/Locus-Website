<template>
  <div class="container frame">
    <form class="needs-validation" novalidate>
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="validationCustom01">First name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="First name"
            value="Mark"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom02">Last name</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="Last name"
            value="Otto"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustomUsername">Mail</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend"
                ><img
                  style="height: 24px"
                  src="https://drive.google.com/uc?export=view&id=1kqiYeAWDX-tsWTjppByvslIqwhCbsLtS"
                  alt=""
              /></span>
            </div>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              placeholder="Mail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="validationCustom03">City</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="City"
            required
          />
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom04">State</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom04"
            placeholder="State"
            required
          />
          <div class="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom05">Zip</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="Zip"
            required
          />
          <div class="invalid-feedback">Please provide a valid zip.</div>
        </div>
      </div>
      <textarea placeholder="Message" class="form-control" rows="5"></textarea>
      <div class="form-group">
        <br />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <br />
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactFormComponent',
  /* methods(): {
            // Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
        } */
}
</script>

<style scoped>
.frame {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 10px;
  padding: 30px;
}
</style>